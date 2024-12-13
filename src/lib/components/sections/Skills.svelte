<script>
  export let items = [];
</script>

<div class="flex flex-col">
  {#each items as skill}
    <div>
      {#if skill.name}
        <span class="text-gray-800 font-semibold">{skill.name}: </span>
      {/if}

      {#if skill.level}
        <span class="text-gray-600">{skill.level}</span>
      {/if}

      {#if skill.keywords?.length}
        <span class="text-gray-700">{skill.keywords.join(", ")}</span>
      {/if}
    </div>
  {/each}
</div>
