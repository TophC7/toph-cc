{
  description = "toph.cc portfolio";

  nixConfig = {
    extra-substituters = [
      "https://cache.nixos.org"
      "https://nix-community.cachix.org"
    ];
    extra-trusted-public-keys = [
      "cache.nixos.org-1:6NCHdD59X431o0gWypbMrAURkbJ16ZPMQFGspcDShjY="
      "nix-community.cachix.org-1:mB9FSh9qf2dCimDSUo8Zy7bkq5CX+/rkCWyvRCYg3Fs="
    ];
  };

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";

    bun2nix = {
      url = "github:nix-community/bun2nix";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  outputs =
    {
      nixpkgs,
      bun2nix,
      ...
    }:
    let
      systems = [
        "x86_64-linux"
        "aarch64-linux"
        "x86_64-darwin"
        "aarch64-darwin"
      ];
      eachSystem = f: nixpkgs.lib.genAttrs systems (system: f system);
      pkgsFor = system: import nixpkgs { inherit system; };
      bun2nixFor = system: bun2nix.packages.${system}.default;
    in
    {
      packages = eachSystem (
        system:
        let
          pkgs = pkgsFor system;
          b2n = bun2nixFor system;
          fs = pkgs.lib.fileset;
        in
        {
          default = pkgs.stdenv.mkDerivation {
            pname = "toph-cc";
            version = "0.1.0";

            src = fs.toSource {
              root = ./.;
              fileset = fs.unions [
                ./package.json
                ./bun.lock
                ./bun.nix
                ./svelte.config.js
                ./vite.config.ts
                ./tsconfig.json
                ./.prettierrc
                ./src
                ./static
              ];
            };

            nativeBuildInputs = [
              b2n.hook
              pkgs.bun
            ];

            bunDeps = b2n.fetchBunDeps {
              bunNix = ./bun.nix;
            };

            dontUseBunBuild = true;
            dontUseBunCheck = true;
            dontUseBunInstall = true;

            buildPhase = ''
              runHook preBuild
              export HOME="$TMPDIR"
              bun run build
              runHook postBuild
            '';

            installPhase = ''
              runHook preInstall
              mkdir -p $out
              cp -r build/* $out/
              runHook postInstall
            '';

            meta = {
              description = "Toph portfolio site";
              license = pkgs.lib.licenses.mit;
              platforms = pkgs.lib.platforms.linux ++ pkgs.lib.platforms.darwin;
            };
          };
        }
      );

      devShells = eachSystem (
        system:
        let
          pkgs = pkgsFor system;
          b2n = bun2nixFor system;
        in
        {
          default = pkgs.mkShell {
            name = "toph-cc-dev";
            packages = [
              b2n
              pkgs.bun
              pkgs.fish
              pkgs.nixfmt
              pkgs.prettier
            ];
            shellHook = ''
              export SHELL="${pkgs.fish}/bin/fish"
            '';
          };
        }
      );

      formatter = eachSystem (system: (pkgsFor system).nixfmt);
    };
}
