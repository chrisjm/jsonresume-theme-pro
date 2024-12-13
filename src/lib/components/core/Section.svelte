<!-- Section.svelte -->
<script>
  export let title = '';
</script>

<section class="max-w-[700px] mx-auto mb-3">
  {#if title}
    <h2 class="m-0 p-0 mb-1 text-lg font-semibold">{title}</h2>
    <hr class="border-t m-0 p-0 mt-1.5 mb-1 border-gray-700" />
  {/if}
  <div class="mx-2">
    <slot />
  </div>
</section>

