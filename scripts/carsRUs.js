import { Technologies } from "./Technologies.js";
import { Wheels } from "./wheels.js";
import { Paint } from "./paints.js";
import { Interiors } from "./interiors.js";

export const carsRUs = () => {
  return `
    <h1> CARS-R-US </h1>

<article class="choices">
    <section class="choices__paints options">
         ${Paint()}
    </section>
    <section class="choices__interior options">
         ${Interiors()}
    </section>
    <section class="choices__tech options">
        ${Technologies()}
    </section>
    <section class="choices_wheels options">
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
