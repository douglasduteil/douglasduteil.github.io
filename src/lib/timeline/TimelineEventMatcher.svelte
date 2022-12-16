<script lang="ts">
  import type { TimelineEvent } from "./types";
  import TimelineJobEvent from "./TimelineJobEvent.svelte";
  import TimelineStudyEvent from "./TimelineStudyEvent.svelte";
  import TimelineGithubEvent from "./TimelineGithubEvent.svelte";
  import TimelineTalkEvent from "./TimelineTalkEvent.svelte";
  export let event: TimelineEvent;
</script>

{#if event.type === "github"}
  <TimelineGithubEvent {...event} />
{:else if event.type === "job"}
  <TimelineJobEvent {...event} />
{:else if event.type === "study"}
  <TimelineStudyEvent {...event} />
{:else if event.type === "talk"}
  <TimelineTalkEvent {...event} />
{:else}
  <TimelineJobEvent
    title="INFO(o_0): '{event.type}' event here ?"
    body="[TODO(@douglasduteil): add a '{event.type}' event.type]"
  />
{/if}
