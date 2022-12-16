<script>
  import LocationIcon from "$lib/svg/location.svelte";
  import GithubIcon from "$lib/svg/github.svelte";
  import SuitcaseIcon from "$lib/svg/suitcase.svelte";
  import { Typer, orders } from "$lib/typer";

  const activities = [
    "===========",
    "Contributor",
    "Developer",
    "Musician",
    "Gamer",
    "Sleeper",
    "Jogger",
  ];
</script>

<section>
  <ul>
    <li>
      <h1>Douglas Duteil</h1>
    </li>
    <li>
      <Typer
        words={activities}
        prefix="#"
        orderFn={orders.shuffledTyperOrder}
      />
    </li>
    <li>
      <i><LocationIcon /></i>
      <div>Paris, France</div>
    </li>
    <li>
      <i><GithubIcon /></i>
      <div>OneDoes Member</div>
    </li>
    <li>
      <i><SuitcaseIcon /></i>
      <div>Lead Developer</div>
    </li>
  </ul>
</section>

<style lang="scss">
  @import "$lib/variables";
  @import "$lib/mixins";

  section {
    @include media-min-tablet {
      display: flex;
      flex: 1;
      background: rgba(0, 0, 0, 0.6);
      padding-left: $navbar--width;
      align-items: center;
      justify-content: center;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    list-style-type: none;

    // modile
    @include media-max-phone {
      $black: rgba(0, 0, 0, 0.6);
      height: 35vh;
      margin-bottom: 50px;
      padding: 20vh 5vw 20px;
      background: linear-gradient(
        to bottom,
        transparent 0%,
        $black 50%,
        $black 100%
      );
    }

    // modile landscape
    // @media (--phone) and (max-height: calc($screen-xs-max / (16 / 9) )) {
    @media screen and (max-width: $screen-xs-max) and (max-height: calc($screen-xs-max / (16 / 9) )) {
      padding-top: 0px;
    }

    // no modile
    @include media-min-tablet {
      min-height: 300px;
      min-width: 450px;
    }
  }

  li {
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 1.15em;

    &:not(:first-child) {
      flex: 1;
    }
  }

  h1 {
    font-size: 3rem;
    font-weight: normal;
    margin-bottom: 0;
  }

  i {
    text-align: center;
    margin-right: 20px;
  }
</style>
