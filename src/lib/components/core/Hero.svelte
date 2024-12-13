<!-- Hero.svelte -->
<script>
  import {
    mdiEmail,
    mdiPhone,
    mdiWeb,
    mdiMapMarker,
    mdiLinkedin,
    mdiGithub,
    mdiTwitter,
    mdiFacebook,
  } from "@mdi/js"
  import Icon from "mdi-svelte"

  export let resume
  const { basics } = resume
  const { profiles = [] } = basics
</script>

<header class="max-w-[700px] mx-auto mb-3">
  <div class="text-center mb-2">
    <h1 class="text-3xl text-gray-900">{basics.name}</h1>
    {#if basics.label}
      <h2 class="text-xl text-gray-600 font-normal">
        {basics.label}
      </h2>
    {/if}
  </div>

  <div class="flex flex-wrap justify-center gap-2 print:gap-1">
    {#if basics.email}
      <a
        href="mailto:{basics.email}"
        class="flex items-center gap-1 text-gray-700 no-underline hover:text-gray-900 hover:underline print:text-gray-900"
      >
        <Icon path={mdiEmail} size="1em" />
        <span>{basics.email}</span>
      </a>
    {/if}

    {#if basics.phone}
      <a
        href="tel:{basics.phone}"
        class="flex items-center gap-1 text-gray-700 no-underline hover:text-gray-900 hover:underline print:text-gray-900"
      >
        <Icon path={mdiPhone} size="1em" />
        <span>{basics.phone}</span>
      </a>
    {/if}

    {#if basics.url}
      <a
        href={basics.url}
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-1 text-gray-700 no-underline hover:text-gray-900 hover:underline print:text-gray-900"
      >
        <Icon path={mdiWeb} size="1em" />
        <span>{basics.url}</span>
      </a>
    {/if}

    {#if basics.location}
      <div class="flex items-center gap-1 text-gray-700">
        <Icon path={mdiMapMarker} size="1em" />
        <span>{basics.location.city}, {basics.location.region}</span>
      </div>
    {/if}
  </div>
  {#if profiles.length > 0}
    <div
      class="flex flex-wrap justify-center gap-2 print:gap-1"
    >
      {#each profiles as profile}
        <div class="flex items-center gap-1 text-gray-700">
          <Icon
            path={profile.network === "LinkedIn"
              ? mdiLinkedin
              : profile.network === "Github"
                ? mdiGithub
                : profile.network === "Twitter"
                  ? mdiTwitter
                  : profile.network === "Facebook"
                    ? mdiFacebook
                    : mdiWeb}
            size="1em"
          />
          <span
            ><a
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-700 no-underline hover:text-gray-900 hover:underline print:text-gray-900"
            >
              {profile.network}
            </a></span
          >
        </div>
      {/each}
    </div>
  {/if}
</header>
