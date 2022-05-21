import "./style.css";
import Split from "split-grid";

Split({
  minSize: 120,
  columnGutters: [
    {
      track: 1,
      element: document.querySelector(".gutter-col-1"),
    },
  ],
  rowGutters: [
    {
      track: 1,
      element: document.querySelector(".gutter-row-1"),
    },
  ],
});

const getEl = (selector) => document.querySelector(selector);

const htmlCode = getEl("#html-code");
const cssCode = getEl("#css-code");
const jsCode = getEl("#js-code");

const update = () => {
  const html = renderHtml();
  getEl("iframe").setAttribute("srcdoc", html);
};

htmlCode.addEventListener("input", update);
cssCode.addEventListener("input", update);
jsCode.addEventListener("input", update);

const renderHtml = () => {
  const html = htmlCode.value;
  const css = cssCode.value;
  const js = jsCode.value;
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <style>
        ${css}
      </style>
    </head>
    <body>
      ${html}
      <script>
      ${js}
      </script>
    </body>
  </html>
  `;
};
