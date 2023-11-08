<script lang="ts">
  let clazz = '';
  export let href: string;
  export let external = false;
  export { clazz as class };
</script>

<a {href} class={clazz} target={external ? '_blank' : ''} rel={external ? 'noopener noreferrer' : ''}>
  <slot />
</a>
