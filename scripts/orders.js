import { getInteriors, getPaints, getTechnology, getWheels, getOrders } from "./database.js";

const buildOrderListItem = (order) => {
    const interiors = getInteriors()
    const paints = getPaints()
    const tech = getTechnology()
    const wheels = getWheels()
    
    
    let totalCost = 0


    //The find() method returns the first element in the provided array that satisfies the provided testing function.
    const foundInteriors = interiors.find(
    (interior) => {
        return interior.id === order.interiorId
    }
)
totalCost += foundInteriors.price 

const foundPaints = paints.find(
    (paint) => {
        return paint.id === order.paintId
    }
)
totalCost += foundPaints.price

// something about this is breaking it. 
const foundTech = tech.find(
    (techs) => {
        return techs.id === order.techId
    }
)
totalCost += foundTech.price

const foundWheels = wheels.find(
    (wheel) => {
        return wheel.id === order.wheelsId
    }
)
totalCost += foundWheels.price
// totalCost = foundInteriors.price + foundPaints.price + foundTech.price + foundWheels.price

const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})

    return `<li>
        Order #${order.id} was placed on ${new Date(order.timestamp)} cost ${costString}
    </li>`
}

export const ordersMain = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()
    

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join(" ")
    html += "</ul>"

    return html
}