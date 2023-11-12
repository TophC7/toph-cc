<script lang="ts">
  import { page } from '$app/stores';
  import { Code, GitHub, Home, Linkedin, PDF, Quotes } from '$svg';
  import { getToastStore, type ToastSettings } from '@skeletonlabs/skeleton';
  import NavAnchor from './NavAnchor.svelte';

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
      tooltipPosition: 'top',
      external: true
    },
    LinkedIn: {
      href: 'https://www.linkedin.com/in/tophc7',
      svg: Linkedin,
      tooltipText: 'LinkedIn',
      tooltipPosition: 'top',
      external: true
    },
    Resume: {
      href: '/docs/resume.pdf',
      svg: PDF,
      tooltipText: 'Resume',
      tooltipPosition: 'top'
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

  let navAnchor: HTMLElement;
</script>

<nav id="BottomNav" bind:this={navAnchor}>
  <div id="bound" class="variant-blur-surface">
    <div id="lead"></div>
    <div id="inner"></div>
    <!-- <hr class="spacer ml-auto" /> -->
    <div id="trail" class="variant-blur-surface">
      <NavAnchor {...Anchors.Blog} />
      <NavAnchor {...Anchors.Projects} />
      <NavAnchor {...Anchors.Home} />
    </div>
  </div>
</nav>

<style lang="postcss">
  #BottomNav {
    @apply fixed bottom-0 left-0 z-50 h-20 max-h-[20] min-h-[20] w-full;
    & #bound {
      @apply mt-4 flex h-16 w-full justify-end;
    }
    & #lead {
      @apply flex h-full items-end gap-3 p-3 pl-0;
    }
    & #inner {
      @apply flex h-full items-end gap-3 py-2;
    }
    & #trail {
      @apply flex h-full items-end gap-2 rounded-base rounded-br-none p-2;
    }
  }
</style>
