<script lang="ts">
  import EditButton from '$components/EditButton.svelte';
  import { Fa } from '$lib';
  import { Contact, Croissant } from '$lib/components';
  import { copy, link, linkOut } from '$lib/utils';
  import Ellipsis from '$svg/ellipsis.svg?component';
  import { faGithubAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons';
  import { faEnvelope, faFilePdf, faPen } from '@fortawesome/free-solid-svg-icons';
  import { AppBar, getToastStore } from '@skeletonlabs/skeleton';

  const toastStore = getToastStore();
  const email = 'chris@toph.cc';

  let mobile: boolean;
  let expand: boolean = false;
  let clientWidth: number;
  $: mobile = clientWidth < 640;

  function handleExpand() {
    expand = !expand;
  }

  function handleCopyError() {
    toastStore.trigger({
      message: "Couldn't copy email to clipboard ☹️",
      background: 'variant-filled-error',
      hideDismiss: true,
      timeout: 3000
    });
  }

  function handleCopySuccess() {
    toastStore.trigger({
      message: 'Email copied to clipboard!',
      background: 'variant-filled-success',
      hideDismiss: true,
      timeout: 3000
    });
  }
</script>

<div bind:clientWidth>
  <AppBar
    class="w-full !p-0"
    regionRowMain="mx-auto flex xl:max-w-7xl w-full p-4"
    regionRowHeadline="!my-[unset] variant-soft">
    <svelte:fragment slot="lead">
      <Croissant />
    </svelte:fragment>
    <h1 class="text-xl">Chris Toph</h1>
    <svelte:fragment slot="trail">
      {#if mobile}
        <button class="btn-icon relative" on:click={handleExpand}>
          <Ellipsis class="h-5 w-6 rotate-90" />
        </button>
        <div class="menu-wrapper grid-rows-[0fr]" class:grid-rows-[1fr]={expand}>
          <div class="menu">
            <button use:linkOut={'https://github.com/tophc7'}>
              <Fa icon={faGithubAlt} class="contactIcon" /> GitHub
            </button>
            <button use:linkOut={'https://www.linkedin.com/in/tophc7/'}>
              <Fa icon={faLinkedin} class="contactIcon" /> LinkedIn
            </button>
            <button use:copy={email} on:copySuccess={handleCopySuccess} on:copyError={handleCopyError}>
              <Fa icon={faEnvelope} class="contactIcon" /> Email
            </button>
            <button use:link={'/docs/Resume.pdf'}>
              <Fa icon={faFilePdf} class="contactIcon" /> Resume
            </button>
            <button class="!text-warning-400" disabled use:link={'/docs/Resume.pdf'}>
              <Fa icon={faPen} class="contactIcon text-warning-400" /> Edit
            </button>
          </div>
        </div>
      {:else}
        <EditButton />
        <Contact />
      {/if}
    </svelte:fragment>
  </AppBar>
</div>

<style lang="postcss">
  .menu-wrapper {
    @apply absolute grid transition-[grid-template-rows];
    top: calc(100% - 1rem);
    right: 0.5rem;
  }

  .menu {
    @apply variant-soft-surface btn-group-vertical backdrop-blur text-on-surface-token;
    background-color: rgb(var(--color-surface-500) / 0.6) !important;
    & > button {
      @apply flex justify-start gap-2;
    }
  }
</style>
