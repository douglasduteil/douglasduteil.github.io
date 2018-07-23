//

export default (render, state, emit) => {
  return render(state, ':home')`
    <h1>Home</h1>
  `;
};
