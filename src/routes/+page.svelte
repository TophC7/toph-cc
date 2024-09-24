<script lang="ts">
  import { ArrayFormat, Project } from '$lib/components';

  const techs = [
    'React',
    'TailwindCSS',
    'Next.js',
    'Svelte',
    'Docker',
    'Spring',
    'AWS',
    'Google Cloud',
    'Firebase',
    'SQL'
  ];

  // TODO: fetch from api in the future
  const cesarAmaroLink = `<a href="https://www.cesaramaro.co" target="_blank" rel="noopener noreferrer">@CesarAmaro</a>`;
  const projects = [
    {
      title: 'Nerf This',
      description: `A game statistics web app using Next.js and TailwindCSS that lets players easily check out their in-game stats directly from Riot's API. Built in collaboration with ${cesarAmaroLink}, our goal is to make it user-friendly, responsive and visually appealing.`,
      imageSource: '/images/morgana-nt.png',
      actions: [
        { url: 'https://github.com/cesaramaro/leaguestats', text: 'GitHub' },
        { url: '/', text: 'Live Soon', disabled: true }
      ]
    },
    {
      title: 'Project Starters',
      description:
        'Template Projects for Svelte and Next.js with sensible configurations for components and dev environment.',
      imageSource: '/images/svelte.png',
      actions: [
        { url: 'https://github.com/tophc7/starter-svelte-daisyui', text: 'SvelteKit' },
        { url: 'https://github.com/tophc7/starter-nextjs-daisyui', text: 'Next.js' },
        { url: 'https://svelte.toph.cc', text: 'Live' }
      ]
    },
    {
      title: 'Kiwis',
      description:
        'A random website about Kiwis. Created to look like a 2017 High school project with questionable Styling and Colors.',
      imageSource: '/images/kiwi-site.jpeg',
      actions: [
        { url: 'https://github.com/TophC7/kiwi-site', text: 'GitHub' },
        { url: 'https://kiwi.toph.cc', text: 'Live' }
      ]
    },
    {
      // TODO: this one really needs more pics
      title: 'Quizspark',
      description:
        'Quiz WebApp to facilitate learning Java within GenSpark with Quizzes, Notes, Flashcards and Forums.',
      imageSource: '/images/quizspark.jpeg',
      actions: []
    },
    {
      title: 'Toph.cc',
      description:
        'This website! My personal portfolio and experimental site. Explore its different versions over time and see how it has evolved.',
      imageSource: '/images/toph-cc.png',
      actions: [{ url: 'https://github.com/TophC7/Personal-Site', text: 'GitHub' }]
    }
  ];
</script>

<svelte:head>
  <title>Chris Toph</title>
  <meta name="description" content="My Portfolio" />
</svelte:head>

<section class="section">
  <div>
    <h1
      class="glow max-w-4xl pb-5 text-4xl font-bold leading-snug text-primary-500 transition-all ease-linear xl:text-5xl">
      Welcome to my portfolio!<br />
      I'm Chris, a Software Engineer and Web Developer
    </h1>
    <p class="max-w-5xl">
      At the moment, I'm studying at
      <a class="font-medium text-warning-500 underline" href="https://www.vcu.edu/">Virginia Commonwealth University</a>
      and interning at <a class="font-medium text-primary-500 underline" href="https://it4causes.org/">IT4Causes</a>.
      I'm really into tech and always on the lookout for new ways to learn and grow. I've got some great experience
      working as a Full-Stack Developer with <span class="font-medium text-error-500">Java</span> and
      <span class="font-medium text-secondary-500">TypeScript</span>, and I'm excited to find my next step in the field
      to become the <span class="fable font-medium"> fabled 10x Dev</span>. I work with a bunch of different
      technologies, but some of my go-tos are <ArrayFormat array={techs} />. Feel free to poke around my site, get to
      know me, and check out my projects!
      <!-- I have worked with
      <a class="font-medium text-secondary-500 underline" href="https://nicheaim.com/">NicheAim Technologies</a>
      as a Full-Stack Developer in FHIR and Healthcare gaining valuable experience to become the
      <span class="fable font-medium"> fabled 10x Dev</span>. My core languages are
      <span class="font-medium text-error-500">Java</span> and
      <span class="font-medium text-secondary-500">TypeScript</span> and some technologies I work with are <ArrayFormat
        array={techs} /> but I work with other techs all the time and love learning new ones. You're invited to browse around
      my site, learn more about me, and see my projects! -->
    </p>
  </div>
</section>

<section class="section">
  {#each projects as project}
    <Project {...project} />
  {/each}
</section>

<style lang="postcss">
  .glow {
    text-shadow: 0 0 0.8rem rgba(var(--color-primary-700));
    animation: blink linear infinite 5s;
  }

  .fable {
    @apply bg-gradient-to-r from-warning-500 via-error-500 to-secondary-500 box-decoration-clone bg-clip-text text-transparent;
    background-size: 400%;
    -webkit-animation: flowGradient 10s ease infinite;
    -moz-animation: flowGradient 10s ease infinite;
    animation: flowGradient 10s ease infinite;
  }

  @keyframes flowGradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes blink {
    50% {
      text-shadow: inherit;
    }
    60% {
      text-shadow: white;
    }
  }

  .section {
    @apply flex flex-col gap-8 pt-8 text-base transition-all ease-linear;
    @screen xl {
      @apply text-xl;
    }
  }
</style>
