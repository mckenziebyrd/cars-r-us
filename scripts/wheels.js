import { getWheels } from "./database.js";

const wheels = getWheels();

export const Wheels = () => {
  let html = "<h2>Wheels</h2>";

  html += '<select id="wheels">';
  html += '<option value="0">Choose Wheel</option>';

  const arrayOfWheels = wheels.map((wheel) => {
    return `<option value="${wheels.id}">${wheels.wheels}</option>`;
  });

  html += arrayOfWheels.join("");
  html += "</select>";

  return html;
};
