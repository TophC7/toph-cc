<script lang="ts">
  import { tooltip } from '$utils';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div class="flex h-28 w-28 flex-wrap gap-4">
  <div class="h-full w-full bg-white" use:tooltip={{ text: 'bottom', color: 'primary', position: 'bottom' }}></div>
  <div class="h-full w-full bg-white" use:tooltip={{ text: 'top', color: 'primary', position: 'top' }}></div>
  <div class="h-full w-full bg-white" use:tooltip={{ text: 'right', color: 'primary', position: 'right' }}></div>
  <div class="h-full w-full bg-white" use:tooltip={{ text: 'left', color: 'primary', position: 'left' }}></div>
</div>
