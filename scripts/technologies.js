import { getTechnologies } from "./database.js";

const techs = getTechnologies();

export const Technologies = () => {
  let html = "<h2>Technologies</h2>";

  html += '<select id="tech">';
  html += '<option value="0">Select a technology package</option>';

  const arrayOfOptions = techs.map((tech) => {
    return `<option value="${tech.id}">${tech.package}</option>`;
  });

  html += arrayOfOptions.join("");
  html += "</select>";
  return html;
};
