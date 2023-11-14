<script lang="ts">
  import { page } from '$app/stores';
  import { Code, Ellipsis, GitHub, Home, Linkedin, PDF, Pen, Quotes } from '$svg';
  import { getToastStore, type ToastSettings } from '@skeletonlabs/skeleton';
  import EmailNavButton from './EmailNavButton.svelte';
  import NavAnchor from './NavAnchor.svelte';
  import NavButton from './NavButton.svelte';

  const toast = getToastStore();
  $: currentPage = $page.url.pathname;

  /** NOTE:
   * This is a temporary solution,
   * Rough idea of the data schema until I implement the CMS
   * which will take care of this */
  let Anchors: {
    [key: string]: {
      svg: App.SVGC;
      href: string;
      tooltipText: string;
      tooltipPosition: App.Position;
      color?: App.SkeletonColors | undefined;
      selected?: boolean | undefined;
      external?: boolean | undefined;
    };
  };
  $: Anchors = {
    Home: {
      href: '/',
      svg: Home,
      tooltipText: 'Home',
      tooltipPosition: 'top',
      color: 'primary',
      selected: currentPage === '/'
    },
    Projects: {
      href: '/projects',
      svg: Code,
      tooltipText: 'Projects',
      tooltipPosition: 'top',
      color: 'tertiary',
      selected: currentPage === '/projects'
    },
    Blog: {
      href: '/blog',
      svg: Quotes,
      tooltipText: 'Blog',
      tooltipPosition: 'top',
      color: 'secondary',
      selected: currentPage === '/blog'
    },
    GitHub: {
      href: 'https://www.github.com/tophc7',
      svg: GitHub,
      tooltipText: 'GitHub',
      tooltipPosition: 'left',
      external: true
    },
    LinkedIn: {
      href: 'https://www.linkedin.com/in/tophc7',
      svg: Linkedin,
      tooltipText: 'LinkedIn',
      tooltipPosition: 'left',
      external: true
    },
    Resume: {
      href: '/docs/resume.pdf',
      svg: PDF,
      tooltipText: 'Resume',
      tooltipPosition: 'left'
    }
  };

  function onEdit() {
    const newToast: ToastSettings = {
      autohide: true,
      background: 'bg-surface-500',
      hideDismiss: true,
      message: 'Did you enable me in dev tools??? 🤔'
    };
    toast.trigger(newToast);
  }

  let show: boolean = true;
  let y: number = 0;
  let scrollY: number = 0;

  $: {
    if (scrollY <= y) {
      show = true;
    } else {
      menuOpen = false;
      show = false;
    }
    y = scrollY;
  }

  let menuOpen = false;
  function toggleMenu() {
    menuOpen = !menuOpen;
  }
</script>

<svelte:window bind:scrollY />

<div id="BottomNav-wrapper" class:bottom-4={show} class:bottom-[-5rem]={!show}>
  <dialog id="menu" class="variant-blur-surface" open={menuOpen}>
    <div class="flex flex-col gap-2">
      <NavButton on:click={onEdit} svg={Pen} tooltipText="Live Soon" tooltipPosition="left" color="warning" disabled />
      <hr class="spacer horizontal" />
      <NavAnchor {...Anchors.Resume} />
      <EmailNavButton tooltipPosition="left" />
      <NavAnchor {...Anchors.LinkedIn} />
      <NavAnchor {...Anchors.GitHub} />
    </div>
  </dialog>

  <nav id="BottomNav" class="variant-blur-surface">
    <div id="lead">
      <NavAnchor {...Anchors.Home} />
      <NavAnchor {...Anchors.Projects} />
      <NavAnchor {...Anchors.Blog} />
    </div>
    <div id="trail">
      <NavButton on:click={toggleMenu} svg={Ellipsis} color="surface" />
    </div>
  </nav>
</div>

<style lang="postcss">
  #BottomNav-wrapper {
    @apply fixed z-10;
    left: calc(50%);
    transform: translateX(-50%);
  }

  #BottomNav {
    @apply flex h-16 justify-end rounded-base;
    width: calc(100vw - 3rem);
  }

  #lead,
  #trail {
    @apply flex gap-2 p-2;
  }

  #lead {
    @apply mr-auto;
  }

  #menu {
    @apply absolute bottom-[4.5rem] left-full m-0 w-16 min-w-[4rem] max-w-[4rem] rounded-base p-2;
    transform: translateX(-100%);
  }

  .spacer {
    @apply my-auto h-12 w-2 rounded-base bg-surface-500;

    &.horizontal {
      @apply h-2 w-12;
    }
  }
</style>
