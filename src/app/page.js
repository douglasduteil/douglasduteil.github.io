//

const inlineStyle = `
@media (min-width: 768px) {
  main {
    padding-left: 70px;
  }
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
