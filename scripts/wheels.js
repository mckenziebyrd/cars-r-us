import { getWheels } from "./database.js";

const wheels = getWheels();

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "wheels") {
            window.alert(`User chose option ${event.target.value}`)
        }
    }
)

export const Wheels = () => {
  let html = "<h2>Wheels</h2>";

  html += '<select id="wheels">';
  html += '<option value="0">Choose Wheel</option>';

  const arrayOfWheels = wheels.map((wheel) => {
    return `<option value="${wheel.id}">${wheel.wheels}</option>`;
  });

  html += arrayOfWheels.join("");
  html += "</select>";

  return html;
};
