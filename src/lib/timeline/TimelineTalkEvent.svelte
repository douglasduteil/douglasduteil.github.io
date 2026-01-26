<script lang="ts">
  import { resolve } from "$app/paths";
  import UsersIcon from "$lib/svg/users.svelte";
  import type { TimelineEvent } from "./types";

  export const { type, title, body, link } = $$props as TimelineEvent;
</script>

<i aria-label="{type} event"><UsersIcon /></i>
<div aria-label="event card">
  <h3>{title}</h3>
  <p><em>{body}</em></p>
  {#if link}
    <p>
      <a href={resolve(link.href)} rel="noreferrer" target="_blank">
        {link.name}
      </a>
    </p>
  {/if}
</div>
