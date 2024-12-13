<script>
  import DateRange from '../utils/DateRange.svelte';

  export let items = [];
</script>

<div class="leading-tight">
  {#each items as item}
    <div class="mb-3 last:mb-0">
      <div class="flex justify-between items-start">
        <div class="flex-1">
          <div class="text-gray-800 m-0">
            {#if item.url}
              <a href={item.url} target="_blank" rel="noopener noreferrer" class="text-inherit text-gray-700 no-underline hover:text-gray-900 hover:underline print:text-gray-900 font-semibold">{item.institution}</a>
            {:else}
              <span class="font-semibold">{item.institution}</span>
            {/if}
            <div class="text-gray-600 italic">
              {item.studyType} {item.area}
            </div>
          </div>
          {#if item.location}
            <span class="text-gray-400">· {item.location}</span>
          {/if}
        </div>
        <DateRange startDate={item.startDate} endDate={item.endDate} />
      </div>

      {#if item.score}
        <p class="my-2 text-gray-700">GPA: {item.score}</p>
      {/if}

      {#if item.courses?.length}
        <div class="">
          <ul class="ml-6 m-0 list-disc text-gray-700 leading-tight">
            {#each item.courses as course}
              <li>{course}</li>
            {/each}
          </ul>
        </div>
      {/if}
    </div>
  {/each}
</div>
