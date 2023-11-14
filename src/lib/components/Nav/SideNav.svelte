<script lang="ts">
  import { page } from '$app/stores';
  import { Code, GitHub, Home, Linkedin, PDF, Pen, Quotes } from '$svg';
  import { getToastStore, type ToastSettings } from '@skeletonlabs/skeleton';
  import Croissant from './Croissant.svelte';
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
      tooltipPosition: 'right',
      color: 'primary',
      selected: currentPage === '/'
    },
    Projects: {
      href: '/projects',
      svg: Code,
      tooltipText: 'Projects',
      tooltipPosition: 'right',
      color: 'tertiary',
      selected: currentPage === '/projects'
    },
    Blog: {
      href: '/blog',
      svg: Quotes,
      tooltipText: 'Blog',
      tooltipPosition: 'right',
      color: 'secondary',
      selected: currentPage === '/blog'
    },
    GitHub: {
      href: 'https://www.github.com/tophc7',
      svg: GitHub,
      tooltipText: 'GitHub',
      tooltipPosition: 'right',
      external: true
    },
    LinkedIn: {
      href: 'https://www.linkedin.com/in/tophc7',
      svg: Linkedin,
      tooltipText: 'LinkedIn',
      tooltipPosition: 'right',
      external: true
    },
    Resume: {
      href: '/docs/resume.pdf',
      svg: PDF,
      tooltipText: 'Resume',
      tooltipPosition: 'right'
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
</script>

<nav id="SideNav" class="variant-blur-surface">
  <div id="lead">
    <Croissant />
  </div>
  <div id="inner">
    <NavAnchor {...Anchors.Home} />
    <NavAnchor {...Anchors.Projects} />
    <NavAnchor {...Anchors.Blog} />
    <hr class="spacer" />
    <NavAnchor {...Anchors.GitHub} />
    <NavAnchor {...Anchors.LinkedIn} />
    <EmailNavButton tooltipPosition="right" />
    <NavAnchor {...Anchors.Resume} />
  </div>
  <hr class="spacer mt-auto" />
  <div id="trail">
    <NavButton on:click={onEdit} svg={Pen} tooltipText="Live Soon" tooltipPosition="right" color="warning" disabled />
  </div>
</nav>

<style lang="postcss">
  #SideNav {
    @apply sticky left-0 top-4 z-10 flex min-h-max w-20 min-w-[5rem] max-w-[5rem] flex-col items-center gap-4 rounded-base;
    height: calc(100vh - 2rem);
    & > #lead {
      @apply aspect-square w-full rounded-base bg-surface-600 p-4;
    }
    & > #inner {
      @apply flex w-full flex-col gap-4 px-4;
    }
    & > #trail {
      @apply flex w-full flex-col gap-4 p-4 pt-0;
    }
  }

  .spacer {
    @apply h-2 min-h-[0.5rem] w-12 rounded-base bg-surface-500;
  }
</style>
