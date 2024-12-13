<script>
  export let items = []

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

<div class="flex flex-col">
  {#each items as cert}
    <div class="">
      <div class="">
        <div class="flex justify-between">
          <h3 class="text-gray-800 font-semibold">
            {#if cert.url}
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                class="text-inherit no-underline hover:underline print:no-underline"
                >{cert.name}</a
              >
            {:else}
              {cert.name}
            {/if}
          </h3>
          <span class="text-gray-800 italic text-[10px]">
            {#if cert.date}
              {formatDate(cert.date)}
            {/if}
          </span>
        </div>
        <div class="text-gray-600 italic">
          {cert.issuer}
        </div>
      </div>

      {#if cert.summary}
        <p class="text-gray-600 font-size-[10px] ml-6">{cert.summary}</p>
      {/if}
    </div>
  {/each}
</div>
