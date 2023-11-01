<script lang="ts">
  import { enhance } from '$app/forms';
  import { auth, user } from '$lib/firebase';
  import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

  let email = '';
  let password = '';

  async function signIn(email: string, password: string) {
    const user = await signInWithEmailAndPassword(auth, email, password);
    console.log(user);
  }
</script>

<div class="card" class:variant-soft-success={$user}>
  {#if $user}
    <h2 class="card-header">Welcome, {$user.displayName}</h2>
    <p class="text-center text-on-success-token">You are logged in</p>
    <button class="variant-soft-warning btn" on:click={() => signOut(auth)}>Sign out</button>
  {:else}
    <form
      class="w-2/5"
      on:submit|preventDefault={() => {
        signIn(email, password);
      }}>
      <input type="email" placeholder="Email" class="input w-full" bind:value={email} />
      <input type="password" placeholder="Password" class="input w-full" bind:value={password} />
      <button type="submit" class="variant-soft-primary btn">Sign in</button>
    </form>
  {/if}
</div>
