//

export default (render, state = {}, emit) => {
  console.log('me.js');
  console.log({ state, emit });
  return render(state, ':home')`
    <h1> Hello HyperHTML </h1>
    <h1> Hello HyperHTML </h1>
    <h1> Hello HyperHTML </h1>
    <h1> Hello HyperHTML </h1>
    <h1> Hello HyperHTML </h1>
    <h1> Hello HyperHTML </h1>
  `;
};
