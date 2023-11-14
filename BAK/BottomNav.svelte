<script lang="ts">
  import { page } from '$app/stores';
  import { Code, Envelope, GitHub, Home, Linkedin, PDF, Quotes } from '$svg';
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

<nav id="BottomNav" class="variant-blur-surface" bind:this={navAnchor}>
  <div id="bound">
    <div id="lead"></div>
    <div id="trail" class="variant-blur-surface">
      <NavAnchor {...Anchors.Blog} />
      <NavAnchor {...Anchors.Projects} />
      <NavAnchor {...Anchors.Home} />
    </div>
  </div>
  <div id="drawer" class="logo-cloud grid-cols-1 gap-1">
    <a class="variant-blur-surface logo-item rounded-base" href="/">
      <i class="logo"><GitHub /></i>
      <span>GitHub</span>
    </a>
    <a class="variant-blur-surface logo-item rounded-base" href="/">
      <i class="logo"><Linkedin /></i>
      <span>LinkedIn</span>
    </a>
    <a class="variant-blur-surface logo-item rounded-base" href="/">
      <i class="logo"><Envelope /></i>
      <span>Email</span>
    </a>
    <a class="variant-blur-surface logo-item rounded-base" href="/">
      <i class="logo"><PDF /></i>
      <span>Resume</span>
    </a>
  </div>
</nav>

<style lang="postcss">
  #BottomNav {
    @apply fixed bottom-0 left-0 z-10 w-full rounded-base rounded-b-none;
  }
  #bound {
    @apply flex h-16 justify-end;
  }
  #drawer {
    @apply p-1;
  }
  #lead {
    @apply flex gap-3 p-3;
  }
  #trail {
    @apply flex gap-2 rounded-base p-2;
  }

  .logo {
    @apply badge-icon;
  }
</style>
