import { Technologies } from "./Technologies.js";
import { Wheels } from "./wheels.js";
import { Paint } from "./paints.js";
import { Interiors } from "./interiors.js";
import { ordersMain } from "./orders.js";
import { addCustomOrder} from "./database.js"

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton"){
            addCustomOrder()
        }
    }
)

export const carsRUs = () => {
  return `
    <h1>
    <i class="fa-solid fa-car-tunnel"></i>
    CARS-R-US 
    </h1>

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
    <h2 id="ordersHeader">Custom Jewelry Orders</h2>
   ${ordersMain()}
</article>    
`
};
