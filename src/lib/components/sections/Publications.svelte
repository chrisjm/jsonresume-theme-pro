<script>
  export let items = [];

  function formatDate(dateString) {
    if (!dateString) return ""
    const date = new Date(`${dateString}Z`)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      timeZone: "America/Los_Angeles",
    })
  }
</script>

<div>
  {#each items as pub}
    <div>
      <div>
        <div class="flex justify-between">
          <h3 class="text-gray-800 font-semibold">
            {#if pub.url}
              <a href={pub.url} target="_blank" rel="noopener noreferrer" class="text-inherit text-gray-700 no-underline hover:text-gray-900 hover:underline print:text-gray-900">{pub.name}</a>
            {:else}
              <span class="">{pub.name}</span>
            {/if}
          </h3>
          <div class="text-gray-600">
            {#if pub.releaseDate}
              <span class="text-gray-700 text-[10px]">{formatDate(pub.releaseDate)}</span>
            {/if}
          </div>
        </div>
        <span class="italic">{pub.publisher}</span>
      </div>

      {#if pub.summary}
        <p class="text-gray-700 ml-6 text-[10px]">{pub.summary}</p>
      {/if}
    </div>
  {/each}
</div>

