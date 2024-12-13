<script>
  import DateRange from '../utils/DateRange.svelte';

  export let items = [];
</script>

<div>
  {#each items as item}
    <div class="mb-3 last:mb-0">
      <div class="flex justify-between items-start gap-2">
        <div class="flex-1 leading-tight">
          <h3 class="text-gray-800 font-semibold m-0">{item.position}</h3>
          <div class="text-gray-600">
            {#if item.url}
              <a href={item.url} target="_blank" rel="noopener noreferrer" class="text-inherit text-gray-700 no-underline hover:text-gray-900 hover:underline print:text-gray-900 italic">{item.name}</a>
            {:else}
              <span class="italic">{item.name}</span>
            {/if}
            {#if item.location}
              <span class="text-gray-400">· {item.location}</span>
            {/if}
          </div>
        </div>
        <DateRange startDate={item.startDate} endDate={item.endDate} />
      </div>

      {#if item.summary}
        <p class="text-gray-700">{item.summary}</p>
      {/if}

      {#if item.highlights?.length}
        <ul class="ml-6 m-0 list-disc text-gray-700 leading-tight">
          {#each item.highlights as highlight}
            <li>{highlight}</li>
          {/each}
        </ul>
      {/if}
    </div>
  {/each}
</div>
