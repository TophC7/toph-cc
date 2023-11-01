<script lang="ts">
  import type { SvelteComponent } from 'svelte';
  import { auth, user } from '$lib/firebase';
  import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

  // Stores
  import { getModalStore } from '@skeletonlabs/skeleton';

  // Props
  /** Exposes parent props to this component. */
  export let parent: SvelteComponent;

  const modalStore = getModalStore();

  // Form Data
  const formData = {
    email: '',
    password: ''
  };

  // We've created a custom submit function to pass the response and close the modal.
  async function signIn(data: typeof formData) {
    const user = await signInWithEmailAndPassword(auth, data.email, data.password);
    console.log(user);
  }
</script>

{#if $modalStore[0]}
  <div class="card variant-outline-surface w-modal p-2">
    {#if $user}
      <header class="card-header">
        <h3 class="text-2xl font-bold">Super Secret Login</h3>
      </header>
      <div class="card-content">
        Signed in with <span class="font-bold text-primary-500">{$user.email}</span>
      </div>
      <footer class="card-footer flex w-full justify-end">
        <button class="variant-soft-error btn" on:click={() => signOut(auth)}>Sign out</button>
      </footer>
    {:else}
      <header class="card-header">
        <h3 class="text-2xl font-bold">Super Secret Login</h3>
        For Admin editing. Try the Edit button for a demo of this feature!
      </header>
      <form class="card-content space-y-2">
        <label class="label">
          <span>Email</span>
          <input class="input px-1" type="email" bind:value={formData.email} placeholder="Enter email..." />
        </label>
        <label class="label">
          <span>Password</span>
          <input class="input px-1" type="password" bind:value={formData.password} placeholder="Enter password..." />
        </label>
      </form>
      <footer class="card-footer flex w-full justify-end">
        <button
          class="variant-soft-tertiary btn"
          on:click|preventDefault={() => {
            signIn(formData);
          }}>
          Login
        </button>
      </footer>
    {/if}
  </div>
{/if}
