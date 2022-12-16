<script lang="ts">
  import { page } from "$app/stores";
</script>

<watermark><svelte:component this={$page.data.watermark} /></watermark>
<h1>{$page.data.title}</h1>
<section class={$page.url.pathname}><slot /></section>

<style lang="scss">
  //

  @import "$lib/variables";
  @import "$lib/mixins";

  //

  h1 {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    z-index: 100;
    transform: translateZ(0);
    will-change: transform;

    text-align: center;
    margin: 0;
    padding: 1rem 0;

    background-color: var(--backgroundColor);

    @include media-min-tablet {
      left: $navbar--width;
    }
  }

  section {
    flex: 1;
    display: flex;
    padding: 20px;
    margin-bottom: 50px;

    @include media-min-tablet {
      margin-bottom: 0;
      padding-bottom: 0;
    }
  }

  watermark {
    $size: 170px;

    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    z-index: 0;
    opacity: 0.1;

    display: flex;
    align-items: center;
    justify-content: center;

    user-select: none;
    pointer-events: none;

    :global(svg) {
      width: $size;
      height: $size;
    }
  }
</style>
