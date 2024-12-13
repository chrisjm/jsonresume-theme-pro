<script>
  import Resume from '$lib/components/core/Resume.svelte';
  import resumeData from '../test/resume.json';
</script>

<div class="min-h-screen py-8">
  <Resume resume={resumeData} />
</div>
