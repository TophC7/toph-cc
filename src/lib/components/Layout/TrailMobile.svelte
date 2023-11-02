<script lang="ts">
  import { Fa } from '$lib';
  import { clipboardEventHandler, copy, link, linkOut } from '$lib/utils';
  import Ellipsis from '$svg/ellipsis.svg?component';
  import { faGithubAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons';
  import { faEnvelope, faFilePdf, faPen } from '@fortawesome/free-solid-svg-icons';
  import { getToastStore } from '@skeletonlabs/skeleton';

  const toastStore = getToastStore();
  const copyHandler = clipboardEventHandler(toastStore);
  const email = 'chris@toph.cc';

  let mobile: boolean;
  let expand: boolean = false;
  let clientWidth: number;
  $: mobile = clientWidth < 640;

  function handleExpand() {
    expand = !expand;
  }
</script>

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
    <button use:copy={email} on:copySuccess={copyHandler.handleCopySuccess} on:copyError={copyHandler.handleCopyError}>
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
      @apply flex justify-start gap-4 text-xl;
    }
  }
</style>
