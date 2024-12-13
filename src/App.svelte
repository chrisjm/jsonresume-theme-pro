<script>
  import Resume from '$lib/components/core/Resume.svelte';
  import resumeData from '../test/resume.json';
</script>

<div class="min-h-screen py-8 font-serif bg-white text-xs">
  <Resume resume={resumeData} />
</div>
