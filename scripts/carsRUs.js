import { Technologies } from "./Technologies.js";
import { Wheels } from "./wheels.js";
import { Paint } from "./paints.js";
import { Interiors } from "./interiors.js";

export const carsRUs = () => {
  return `
    <h1> CARS-R-US </h1>

<article class="choices">
    <section class="choices__paints options">
        <h2>Paints</h2>
         ${Paint()}
    </section>
    <section class="choices__interior options">
        <h2>Interiors</h2>
         ${Interiors()}
    </section>
    <section class="choices__tech options">
        <h2>Technology</h2>
        ${Technologies()}
    </section>
    <section class="choices_wheels options">
        <h2>Wheels</h2>
        ${Wheels()}
    </section>
</article>
<article>
     <button id="orderButton">Create Custom Order</button>
</article>

<article class="customOrders">
    <h2>Custom Jewelry Orders</h2>
   
</article>    
`
};
