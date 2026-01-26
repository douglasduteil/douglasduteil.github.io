<script lang="ts">
  import MusicIcon from "$lib/svg/music.svelte";
  import type { TimelineEvent } from "./types";

  export const { type, title, body, link } = $$props as TimelineEvent;
</script>

<i aria-label="{type} event"><MusicIcon /></i>
<div aria-label="event card">
  <h3>{title}</h3>
  <p>{body}</p>
  {#if link}
    <p>
      <a href={link.href} rel="external noreferrer" target="_blank">
        {link.name}
      </a>
    </p>
  {/if}
</div>
