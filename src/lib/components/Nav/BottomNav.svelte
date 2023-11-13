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

  let menuOpen = false;
  function toggleMenu() {
    menuOpen = !menuOpen;
  }
</script>

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

<div id="BottomNav" class="variant-blur-surface">
  <div id="lead">
    <NavAnchor {...Anchors.Blog} />
    <NavAnchor {...Anchors.Projects} />
    <NavAnchor {...Anchors.Home} />
  </div>
  <hr class="spacer" />
  <div id="trail">
    <NavButton on:click={toggleMenu} svg={Ellipsis} color="surface" />
  </div>
</div>

<style lang="postcss">
  #BottomNav {
    @apply fixed bottom-0 right-0 z-10 m-2 flex h-16 justify-end rounded-base;
  }

  #lead,
  #trail {
    @apply flex gap-2 p-2;
  }

  #menu {
    @apply fixed bottom-[4.5rem] m-2 ml-auto w-16 min-w-[4rem] max-w-[4rem] rounded-base p-2;
  }

  .spacer {
    @apply my-auto h-12 w-2 rounded-base bg-surface-500;

    &.horizontal {
      @apply h-2 w-12;
    }
  }
</style>
