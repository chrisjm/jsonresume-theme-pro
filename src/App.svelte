<script>
  import Icon from 'mdi-svelte';
  import { mdiEmail, mdiPhone, mdiWeb, mdiMapMarker, mdiGithub, mdiLinkedin } from '@mdi/js';
  
  export let resume;
  const { basics, work, education, skills, projects } = resume || {};
</script>

<main>
  {#if basics}
    <header>
      <h1>{basics.name}</h1>
      <div class="contact-info">
        {#if basics.email}
          <span>
            <Icon path={mdiEmail} size="1.2em"/>
            <a href="mailto:{basics.email}">{basics.email}</a>
          </span>
        {/if}
        {#if basics.phone}
          <span>
            <Icon path={mdiPhone} size="1.2em"/>
            <a href="tel:{basics.phone}">{basics.phone}</a>
          </span>
        {/if}
        {#if basics.website}
          <span>
            <Icon path={mdiWeb} size="1.2em"/>
            <a href={basics.website} target="_blank" rel="noopener">{basics.website}</a>
          </span>
        {/if}
        {#if basics.location}
          <span>
            <Icon path={mdiMapMarker} size="1.2em"/>
            <span>{basics.location.city}, {basics.location.region}</span>
          </span>
        {/if}
      </div>
      {#if basics.profiles}
        <div class="social-links">
          {#each basics.profiles as profile}
            <a href={profile.url} target="_blank" rel="noopener">
              <Icon path={profile.network.toLowerCase() === 'github' ? mdiGithub : mdiLinkedin} size="1.2em"/>
              {profile.network}
            </a>
          {/each}
        </div>
      {/if}
    </header>
  {/if}

  {#if work}
    <section>
      <h2>Experience</h2>
      {#each work as job}
        <div class="job">
          <h3>{job.position} at {job.company}</h3>
          <p class="duration">{job.startDate} - {job.endDate || 'Present'}</p>
          <p>{job.summary}</p>
          {#if job.highlights}
            <ul>
              {#each job.highlights as highlight}
                <li>{highlight}</li>
              {/each}
            </ul>
          {/if}
        </div>
      {/each}
    </section>
  {/if}

  {#if education}
    <section>
      <h2>Education</h2>
      {#each education as edu}
        <div class="education">
          <h3>{edu.institution}</h3>
          <p>{edu.area}, {edu.studyType}</p>
          <p class="duration">{edu.startDate} - {edu.endDate || 'Present'}</p>
        </div>
      {/each}
    </section>
  {/if}

  {#if skills}
    <section>
      <h2>Skills</h2>
      {#each skills as skill}
        <div class="skill">
          <h3>{skill.name}</h3>
          {#if skill.keywords}
            <div class="keywords">
              {#each skill.keywords as keyword}
                <span class="keyword">{keyword}</span>
              {/each}
            </div>
          {/if}
        </div>
      {/each}
    </section>
  {/if}
</main>

<style>
  main {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
  }

  header {
    margin-bottom: 2rem;
    text-align: center;
  }

  .contact-info {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    margin: 1rem 0;
  }

  .contact-info span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .social-links {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
  }

  .social-links a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color: inherit;
  }

  section {
    margin: 2rem 0;
  }

  .job, .education {
    margin-bottom: 1.5rem;
  }

  .duration {
    color: #666;
    font-style: italic;
  }

  .keywords {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .keyword {
    background: #f0f0f0;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.9em;
  }

  h1 {
    margin: 0;
    color: #2c3e50;
  }

  h2 {
    color: #34495e;
    border-bottom: 2px solid #eee;
    padding-bottom: 0.5rem;
  }

  h3 {
    color: #2c3e50;
    margin: 0.5rem 0;
  }

  a {
    color: #3498db;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  ul {
    margin: 0.5rem 0;
    padding-left: 1.5rem;
  }

  li {
    margin: 0.25rem 0;
  }
</style>
