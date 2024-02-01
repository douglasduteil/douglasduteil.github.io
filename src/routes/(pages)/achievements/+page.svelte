<script lang="ts">
  import type { TimelineEvent } from "$lib/timeline";
  import { Timeline } from "$lib/timeline";
  import _achievements from "./achievements.json";

  const achievements = _achievements as Array<[number, Array<TimelineEvent>]>;
</script>

<Timeline eventsPerYear={achievements} />
