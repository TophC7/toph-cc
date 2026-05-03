<script lang="ts">
  import {
    ArrowUpRight,
    Blocks,
    Clipboard,
    GitBranch,
    GitFork,
    Heart,
    Library,
    Server,
    Sparkles
  } from '@lucide/svelte'
  import { copyToClipboard } from '$lib/attachments/copy-to-clipboard'
  import LinkedInIcon from '$lib/components/ui/LinkedInIcon.svelte'
  import { Particles } from '$lib/components/ui/particles'

  const stack = ['SvelteKit', 'TypeScript', 'Nix', 'Tailwind', 'Java', 'Docker', 'Fish'] as const
  const contactEmail = 'chris@toph.cc'

  const footerLinks = [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/christopher-rivera-ramos',
      icon: LinkedInIcon
    },
    {
      label: 'Forgejo',
      href: 'https://git.ryot.foo/toph',
      icon: GitBranch
    }
  ] as const

  const links = [
    {
      label: 'GitHub',
      href: 'https://github.com/TophC7',
      detail: 'Code, experiments, dotfiles, mods, and whatever rabbit hole I am in.',
      icon: GitFork
    },
    {
      label: 'dot.nix',
      href: 'https://github.com/TophC7/dot.nix',
      detail: 'My 9+ host NixOS setup for servers, desktops, secrets, and deploys.',
      icon: Server
    },
    {
      label: 'mix.nix',
      href: 'https://github.com/TophC7/mix.nix',
      detail: 'Nix helpers I am building so my configs stop copy-pasting themselves.',
      icon: Library
    },
    {
      label: 'Minecraft Mods',
      href: 'https://modrinth.com/user/kwahson',
      detail: 'Utility mods, Linux fixes, and game ideas that escaped the notes app.',
      icon: Blocks
    }
  ] as const
</script>

<svelte:head>
  <title>Chris Toph / TophC7</title>
  <meta
    name="description"
    content="Chris Toph builds SvelteKit apps, NixOS systems, DevOps tooling, and Minecraft mods."
  />
  <link rel="icon" href="/favicon.svg" />
  <meta property="og:title" content="Chris Toph / TophC7" />
  <meta
    property="og:description"
    content="SvelteKit apps, NixOS systems, DevOps tooling, and Minecraft mods."
  />
  <meta property="og:type" content="website" />
</svelte:head>

<main class="bg-ground text-fg relative min-h-svh overflow-x-hidden">
  <Particles class="portfolio-particles" quantity={82} color="#ffb59f" size={0.48} staticity={42} ease={68} />

  <div
    class="relative z-10 mx-auto flex min-h-svh w-full max-w-6xl flex-col gap-8 px-4 py-6 sm:px-6 sm:py-8 lg:gap-10 lg:px-10"
  >
    <nav class="text-muted flex flex-wrap items-center justify-between gap-3 text-sm">
      <a class="text-bright flex shrink-0 items-center gap-3 no-underline" href="/" aria-label="Toph home">
        <img class="border-edge bg-surface h-9 w-9 rounded-lg border p-1.5" src="/mark.svg" alt="" />
        <span>Toph.cc</span>
      </a>

      <div class="flex flex-1 flex-wrap items-center justify-end gap-x-2 gap-y-1 sm:gap-x-3">
        <button
          {@attach copyToClipboard(contactEmail)}
          class="copy-email-button hover:text-accent focus-visible:border-accent rounded-md border border-transparent px-2 py-1.5 text-right transition duration-150 focus-visible:outline-none sm:px-2.5"
          type="button"
          aria-label={`Copy ${contactEmail}`}
        >
          <span>{contactEmail}</span>
          <Clipboard size={14} strokeWidth={1.8} />
        </button>

        <a
          class="border-edge bg-surface text-bright hover:border-accent hover:bg-raised focus-visible:border-accent inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 whitespace-nowrap no-underline transition duration-150 focus-visible:outline-none"
          href="https://github.com/sponsors/TophC7"
          target="_blank"
          rel="noreferrer"
        >
          <Heart class="text-accent" size={15} strokeWidth={1.9} />
          <span>Sponsor me</span>
        </a>
      </div>
    </nav>

    <div class="grid min-h-0 flex-1 gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
      <section class="flex min-w-0 flex-col justify-center">
        <div class="max-w-3xl">
          <div
            class="pastel-rainbow-badge border-edge bg-surface text-muted mb-6 inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm"
          >
            <Sparkles size={16} strokeWidth={1.8} />
            <span class="pastel-rainbow-text">Full-stack dev + DevOps</span>
          </div>

          <div class="flex flex-col gap-6 sm:flex-row sm:items-end">
            <img
              class="border-edge bg-surface h-20 w-20 rounded-lg border object-cover sm:h-24 sm:w-24"
              src="https://avatars.githubusercontent.com/u/36116606?v=4"
              alt="Chris Toph GitHub avatar"
            />

            <div>
              <p class="text-accent m-0 font-mono text-sm">@TophC7</p>
              <h1 class="text-bright m-0 mt-2 text-4xl leading-none font-semibold sm:text-5xl lg:text-6xl">
                Chris Toph
              </h1>
            </div>
          </div>

          <p class="text-muted mt-6 max-w-2xl text-lg leading-7 sm:text-xl sm:leading-8">
            I build SvelteKit apps, configure NixOS servers, and turn messy workflows into tools people can
            actually use.
          </p>

          <p class="text-subtle mt-5 max-w-2xl text-base leading-7">
            Lately that means leading front-end work at <a href="https://psynk.ai" class="text-fg underline"
              >Psynk.ai</a
            >, shipping real-time AI-powered clinical notes, tightening React codebases, and letting Nix do
            its infrastructure magic.
          </p>

          <div class="mt-7 flex max-w-2xl flex-wrap gap-2">
            {#each stack as item}
              <span class="border-edge bg-surface text-muted rounded-lg border px-3 py-1.5 text-sm"
                >{item}</span
              >
            {/each}
          </div>
        </div>
      </section>

      <aside class="flex min-w-0 items-center">
        <div class="border-edge bg-surface w-full rounded-lg border p-2 lg:max-w-md">
          {#each links as link}
            {@const Icon = link.icon}
            <a
              class="group text-fg ease-default hover:border-edge-strong hover:bg-raised focus-visible:border-accent flex items-center gap-3 rounded-lg border border-transparent p-3 no-underline transition duration-150 focus-visible:outline-none sm:gap-4 sm:p-4"
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              <span
                class="border-edge bg-ground text-accent flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border"
              >
                <Icon size={19} strokeWidth={1.8} />
              </span>

              <span class="min-w-0 flex-1">
                <span class="text-bright block text-base font-medium">{link.label}</span>
                <span class="text-muted mt-1 block text-sm leading-5">{link.detail}</span>
              </span>

              <ArrowUpRight
                class="text-subtle ease-default group-hover:text-accent shrink-0 transition duration-150"
                size={18}
                strokeWidth={1.8}
              />
            </a>
          {/each}
        </div>
      </aside>
    </div>

    <footer
      class="border-edge text-subtle flex flex-col gap-4 border-t pt-5 text-sm md:flex-row md:items-center md:justify-between"
    >
      <p class="m-0 max-w-2xl">
        Built with SvelteKit, deployed on Cloudflare, and lightly overengineered <br/> by Christopher Rivera Ramos.
      </p>

      <div class="flex items-center gap-2 md:justify-end">
        {#each footerLinks as link}
          {@const Icon = link.icon}
          <a
            class="border-edge bg-surface text-muted hover:border-accent hover:bg-raised hover:text-accent focus-visible:border-accent inline-flex h-9 w-9 items-center justify-center rounded-lg border no-underline transition duration-150 focus-visible:outline-none"
            href={link.href}
            target="_blank"
            rel="noreferrer"
            aria-label={link.label}
            title={link.label}
          >
            <Icon size={17} strokeWidth={1.9} />
          </a>
        {/each}
      </div>
    </footer>
  </div>
</main>
