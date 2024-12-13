<script>
  import Section from "./Section.svelte"
  import Hero from "./Hero.svelte"
  import Experience from "../sections/Experience.svelte"
  import Education from "../sections/Education.svelte"
  import Skills from "../sections/Skills.svelte"
  import Certificates from "../sections/Certificates.svelte"
  import Publications from "../sections/Publications.svelte"
  export let resume
</script>

<main class="max-w-[700px] mx-auto bg-white text-gray-900 pb-10 print:pb-0">
  {#if resume}
    <Hero {resume} />

    {#if resume.basics.summary}
      <Section>
        <p class="text-gray-700 leading-tight">{resume.basics.summary}</p>
      </Section>
    {/if}

    {#if resume.education?.length}
      <Section title="Education">
        <Education items={resume.education} />
      </Section>
    {/if}

    {#if resume.work?.length}
      <Section title="Experience">
        <Experience items={resume.work} />
      </Section>
    {/if}

    {#if resume.publications?.length}
      <Section title="Publications">
        <Publications items={resume.publications} />
      </Section>
    {/if}

    {#if resume.certificates?.length}
      <Section title="Certificates">
        <Certificates items={resume.certificates} />
      </Section>
    {/if}

    {#if resume.skills?.length}
      <Section title="Skills">
        <Skills items={resume.skills} />
      </Section>
    {/if}
  {/if}
</main>
