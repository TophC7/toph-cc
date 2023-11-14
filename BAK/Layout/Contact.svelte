<script lang="ts">
  import { Tooltip } from '$components';
  import { Fa } from '$lib';
  import { clipboardEventHandler, copy, link, linkOut } from '$lib/utils';
  import { faGithubAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons';
  import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons';
  import { getToastStore } from '@skeletonlabs/skeleton';
  import { slide } from 'svelte/transition';

  const toastStore = getToastStore();
  const copyHandler = clipboardEventHandler(toastStore);
  const email = 'chris@toph.cc';

  let contactOpen = false;
  function handleClick() {
    contactOpen = !contactOpen;
  }
</script>

<div class="flex h-full flex-row">
  {#if contactOpen}
    <div class="iconWrapper br-r-unset" transition:slide={{ axis: 'x' }}>
      <Tooltip text="Github" position="bottom">
        <button use:linkOut={'https://github.com/tophc7'}>
          <Fa icon={faGithubAlt} class="contactIcon" />
        </button>
      </Tooltip>
      <Tooltip text="LinkedIn" position="bottom">
        <button use:linkOut={'https://www.linkedin.com/in/tophc7/'}>
          <Fa icon={faLinkedin} class="contactIcon" />
        </button>
      </Tooltip>
      <Tooltip text="Email" position="bottom">
        <button
          use:copy={email}
          on:copySuccess={copyHandler.handleCopySuccess}
          on:copyError={copyHandler.handleCopyError}>
          <Fa icon={faEnvelope} class="contactIcon" />
        </button>
      </Tooltip>
      <Tooltip text="Resume" position="bottom">
        <button use:link={'/docs/Resume.pdf'}>
          <Fa icon={faFilePdf} class="contactIcon" />
        </button>
      </Tooltip>
    </div>
  {/if}
  <button class="contactBtn" class:br-l-unset={contactOpen} on:click={handleClick}>Contact</button>
</div>

<style lang="postcss">
  :global(.contactIcon) {
    @apply cursor-pointer text-primary-50;
  }

  .contactBtn {
    @apply variant-soft-primary btn inline-flex items-center justify-center gap-3 whitespace-nowrap px-5 py-2 text-center text-base text-primary-50 transition-all;
    border-radius: var(--theme-rounded-base);
  }

  .iconWrapper {
    @apply flex flex-row items-center gap-3 bg-primary-400 bg-opacity-30 px-3;
  }

  /* Border Radius Right */
  .br-r-unset {
    border-radius: var(--theme-rounded-base) 0 0 var(--theme-rounded-base);
  }

  /* Border Radius Left */
  .br-l-unset {
    border-radius: 0 var(--theme-rounded-base) var(--theme-rounded-base) 0;
  }
</style>
