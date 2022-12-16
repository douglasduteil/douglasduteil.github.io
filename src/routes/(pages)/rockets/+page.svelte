<ul>
  <li>
    <a href="https://github.com/douglasduteil" rel="noreferrer" target="_blank">
      <span>Github</span>
    </a>
  </li>

  <li>
    <a
      href="https://next.plnkr.co/users/douglasduteil/plunks"
      rel="noreferrer"
      target="_blank"
    >
      <span>Plunker</span>
    </a>
  </li>

  <li>
    <a
      href="http://cssdeck.com/user/DouglasDuteil"
      rel="noreferrer"
      target="_blank"
    >
      <span>CSSDesk</span>
    </a>
  </li>

  <li>
    <a href="http://codepen.io/douglasduteil" rel="noreferrer" target="_blank">
      <span>CodePen</span>
    </a>
  </li>
</ul>

<style lang="scss">
  //

  @import "$lib/_variables.scss";
  @import "$lib/_mixins.scss";

  //

  $size: 150px;
  $spacing: calc($size / 3);

  //

  :global(section.\/rockets) {
    margin-top: 4rem;
    justify-content: center;
    align-items: center;
  }

  ul {
    @include virgin-ul;
    @include f-row;

    flex-wrap: wrap;
    justify-content: center;
    align-content: center;

    // modile
    @include media-max-phone {
      margin-bottom: -20px;
    }
  }

  li {
    margin: $spacing;
  }

  a {
    text-decoration: none;
    color: #111;

    display: table-cell;
    vertical-align: middle;
    text-align: center;

    width: calc($size - 20px);
    height: $size;
    background: #fff;

    padding: 0 10px;

    transform: rotate(-45deg);

    position: relative;

    &:before {
      content: "";
      @include fill;
      transform: scale(1.1);
      border: 2px solid white;
    }
  }

  span {
    display: block;
    transform: rotate(45deg);
  }
</style>
