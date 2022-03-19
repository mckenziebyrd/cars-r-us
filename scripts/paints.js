import { getPaints } from "./database.js";

const paints = getPaints();

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "paint") {
            window.alert(`User chose ${event.target.value} paint`)
        }
    }
)

export const Paint = () => {
  let html = "<h2>Paint Colors</h2>";

  html += '<select id="paint">';
  html += '<option value="0">Choose Paint Color<option>';

  const arrayOfPaints = paints.map((paint) => {
    return `<option value="${paints.id}">${paint.color}</option>`;
  });

  html += arrayOfPaints.join("");
  html += "</select>";
  return html;
};
