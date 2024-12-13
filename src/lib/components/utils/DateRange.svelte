<script>
  export let startDate
  export let endDate

  function formatDate(dateString) {
    if (!dateString) return ""
    const date = new Date(`${dateString}Z`)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      timeZone: "America/Los_Angeles"
    })
  }

  $: formattedStart = formatDate(startDate)
  $: formattedEnd = endDate ? formatDate(endDate) : "Present"
</script>

<div class="text-[10px] whitespace-nowrap italic">
  {formattedStart} - {formattedEnd}
</div>
