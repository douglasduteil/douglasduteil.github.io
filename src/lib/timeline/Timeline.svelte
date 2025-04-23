<script lang="ts">
  import TimelineEventMatcher from "./TimelineEventMatcher.svelte";
  import type { TimelineEvent } from "./types";
  export let eventsPerYear: Array<[number, Array<TimelineEvent>]>;
</script>

<ul aria-label="timeline">
  {#each eventsPerYear as [year, events] (year)}
    <li aria-labelledby={String(year)}>
      <time datetime={new Date(year, 0, 1).toDateString()} id={String(year)}
        >{year}</time
      >

      <ul aria-label="events">
        {#each events as event}
          <li aria-label="event">
            <TimelineEventMatcher {event} />
          </li>
        {/each}
      </ul>
    </li>
  {/each}
</ul>

<style lang="scss">
  //

  @import "$lib/variables";
  @import "$lib/mixins";
  @import "./variables";
  @import "./timeline_event.scss";

  //

  ul[aria-label="timeline"] {
    padding: 0;
    list-style: none;
    position: relative;
    display: table;
    width: 100%;
    z-index: 0;

    color: black;
    margin: 0 auto 30px;

    // from little screen
    @media (min-width: $screen-md-min) {
      width: $screen-sm-min;
    }

    // timeline__line
    &:after {
      content: "";
      display: block;
      position: absolute;
      z-index: -1;
      left: calc(2 * $line-node-border--size + $line-size + $left-padding);
      top: 0;
      bottom: -30px;

      width: $line-size;
      margin-left: calc(-1 * $line-size/2);
      background-color: rgba(0, 0, 0, 0.3);
    }
  }

  ul[aria-label="events"] {
    @include virgin-ul;

    li[aria-label="event"] {
      @include timeline_event;
    }
  }

  li[aria-label="event"] {
    position: relative;

    // from little screen
    @media (min-width: $screen-md-min) {
      margin: auto;
      width: $screen-sm-min;
    }
  }

  time {
    display: block;
    margin: calc($watermark-icon-size * 2 / 3) 0 1em;
    padding-left: $left-content-pos;
    font-size: 50px;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.6);
  }
</style>
