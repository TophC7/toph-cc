<script lang="ts">
  import { fly } from 'svelte/transition';
  import { Palette, cssVarsFromPalette, linkOut } from '$lib/utils';

  type ProjectAction = { url: string; text: string; disabled?: boolean };

  export let title = 'title'; // Project title
  export let description = 'Description'; // Project Description Text
  export let imageSource = '/images/toph-cc.png'; // Project Image Source
  export let actions: ProjectAction[]; // Project Action Button, Optional

  let currentWidth: number;
  let landscape: boolean;
  $: landscape = currentWidth >= 1280;
</script>

<!-- TODO: Add ability for multiple images -->

{#await Palette.getAsync(imageSource, { soft: true, dark: true }) then palette}
  <article
    class="card variant-soft"
    class:landscape
    style={cssVarsFromPalette(palette)}
    bind:clientWidth={currentWidth}
    transition:fly={{ y: -50 }}>
    {#if landscape}
      <div class="card-image">
        <img class="h-full w-full object-cover" src={imageSource} alt="screenshot of the project" />
      </div>
      <div class="card-content">
        <h2 class="card-title">
          {title}
        </h2>
        <div class="card-description" contenteditable="false" bind:innerHTML={description} />
        {#if actions}
          <div class="card-actions">
            {#each actions as action}
              <button class="variant-soft btn" disabled={action.disabled} use:linkOut={action.url}>
                {action.text}
              </button>
            {/each}
          </div>
        {/if}
      </div>
    {:else}
      <h2 class="card-title">
        {title}
      </h2>
      <div class="card-description" contenteditable="false" bind:innerHTML={description} />
      <div class="card-image">
        <img src={imageSource} alt="screenshot of the project" />
      </div>
      {#if actions}
        <div class="card-actions">
          {#each actions as action}
            <button class="variant-soft btn" disabled={action.disabled} use:linkOut={action.url}>
              {action.text}
            </button>
          {/each}
        </div>
      {/if}
    {/if}
  </article>
{/await}

<style lang="postcss">
  article.card {
    @apply flex flex-col gap-4 p-4;
    background-color: var(--p);
    color: var(--pf);
  }

  article.landscape {
    @apply grid gap-4;
    grid-template-columns: 1fr 30%;
    grid-template-rows: 1fr;
    & .card-title {
      @apply text-4xl;
    }
    & .card-description {
      @apply text-xl;
    }
  }

  .card-content {
    @apply flex h-full flex-col gap-2;
  }

  .card-title {
    @apply text-3xl font-bold;
  }

  .card-description {
    @apply text-base;
  }

  .card-image {
    @apply relative;
    height: 0;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    & > img {
      @apply absolute left-0 top-0 object-cover;
      border-radius: var(--theme-rounded-base);
    }
  }

  .card-actions {
    @apply mt-auto flex justify-end gap-4;
  }

  .btn {
    background-color: var(--a);
    color: var(--af);

    &:last-child,
    &:only-child {
      background-color: var(--s);
      color: var(--sf);
    }
  }
</style>
