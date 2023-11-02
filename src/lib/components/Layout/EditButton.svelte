<script lang="ts">
  import { Tooltip } from '$components';
  import { Fa } from '$lib';
  import { faPen } from '@fortawesome/free-solid-svg-icons';
</script>

<Tooltip position="left" text="CMS, Live Soon with demo :D">
  <button class="variant-soft-warning btn-icon text-on-warning-token" disabled><Fa icon={faPen}></Fa></button>
</Tooltip>
