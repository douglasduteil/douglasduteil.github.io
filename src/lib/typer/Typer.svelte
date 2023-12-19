<script lang="ts">
  import { onDestroy, onMount } from "svelte";

  export let words = [""];
  export let delayBetweenWords = 2000;
  export let cursorBlinkingSpeed = 500;
  export let erasingSpeed = 50;
  export let typingSpeed = 100;
  export let cursor = "|";
  export let orderFn = (_: string[]): string | undefined => "";
  export let prefix = "§";

  const FORWORD = 1;
  const BACKWORD = -1;

  let expectedWord = "";
  let actualWord = "";
  let text = `${prefix} ${actualWord}`;
  let timing_interval_typing: number;
  let timing_interval_blinking: number;
  let timeoutNextWord: number;

  onMount(typingLoop);
  onDestroy(() => {
    clearTimeout(timeoutNextWord);
    clearInterval(timing_interval_blinking);
    clearInterval(timing_interval_typing);
  });

  //

  async function typingLoop() {
    expectedWord = orderFn(words) || "";
    await typingAnimation(FORWORD, typingSpeed);
    await wait(delayBetweenWords);
    await typingAnimation(BACKWORD, erasingSpeed);
    await typingLoop();
  }

  async function typingAnimation(
    direction: number,
    speed: number,
  ): Promise<void> {
    const limit = direction > 0 ? expectedWord.length : 0;

    return new Promise((resolve) => {
      timing_interval_typing = +setInterval(type_letter, speed);

      function type_letter() {
        const typed_length = actualWord.length;
        if (typed_length === limit) {
          clearInterval(timing_interval_typing);
          return resolve();
        }
        actualWord = expectedWord.slice(0, typed_length + direction);
        render();
      }
    });
  }

  async function wait(delay: number): Promise<void> {
    const _cursor = cursor;
    timing_interval_blinking = +setInterval(
      cursorBlinking,
      cursorBlinkingSpeed,
    );
    return new Promise(
      (resolve) =>
        (timeoutNextWord = +setTimeout(() => {
          clearInterval(timing_interval_blinking);
          cursor = _cursor;
          render();
          resolve();
        }, delay)),
    );

    function cursorBlinking() {
      cursor = cursor.length ? "" : _cursor;
      render();
    }
  }

  function render() {
    requestAnimationFrame(function raf_render() {
      text = `${prefix} ${actualWord} ${cursor}`;
    });
  }
</script>

<dd-supa-cinematic-hacker-typer>
  {text}
</dd-supa-cinematic-hacker-typer>

<style>
  dd-supa-cinematic-hacker-typer {
    display: block;
    font-size: 2rem;
    margin-bottom: 1rem;
  }
</style>
