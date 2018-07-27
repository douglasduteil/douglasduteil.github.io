//

const inlineStyle = `

@media (min-width: 768px) {
  main {
    padding-left: 70px;
  }
}

section {
  flex: 1;
  display: flex;
  padding: 20px;
  margin-bottom: 50px;
  overflow: auto;
}

@media (min-width: 768px) {
  section {
    margin-bottom: 0;
    padding-bottom: 0;
  }
}
`;
const _ = {};
export default render => ({ title, children, bgColor }) => {
  return render(_, ':page-layout')`
    <h1>${title}</h1>
    <section>${children}</section>
    <style>${{ html: inlineStyle }}</style>
    <style>${{
      html: `
      main {
        background-color: ${bgColor};
      }
      `
    }}</style>
  `;
};
