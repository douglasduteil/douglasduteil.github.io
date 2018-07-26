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
  margin-bottom: 50px;
  padding: 20px;
}
`;
const _ = {};
export default render => ({ title, content, bgColor }) => {
  return render(_, ':page-layout')`
    <h1>${title}</h1>
    <section>${content}</section>
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
