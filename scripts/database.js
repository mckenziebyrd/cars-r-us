
const database = {
    orderBuilder: {}, //this is temporary state
    paints: [
    {
      id: 1,
      color: "Silver",
      price: 123,
    },
    {
      id: 2,
      color: "Midnight Blue",
      price: 254,
    },
    {
      id: 3,
      color: "Firebrick Red",
      price: 371,
    },
    {
      id: 4,
      color: "Spring Green",
      price: 269,
    },
  ],
  interiors: [
      {
          id: 1,
          fabric: "Beige Fabric",
          price: 700
      },
      {
        id: 2,
        fabric: "Charcoal Fabric",
        price: 600
      },
      {
        id: 3,
        fabric: "White Leather",
        price: 900
      },
      {
        id: 4,
        fabric: "Black Leather",
        price: 1000
      }
  ],
  tech: [
      {
          id: 1,
          technology: "Basic Package",
          price: 3000
      },
      {
        id: 2,
        technology: "Navigation Package",
        price: 3700
      },
      {
        id: 3,
        technology: "Visibility Package",
        price: 4400
      },
      {
        id: 4,
        technology: "Ultra Package",
        price: 7800
      }
  ],
  wheels: [
      {
          id: 1,
          wheels: "17-inch Pair Radial",
          price: 300
      },
      {
        id: 2,
        wheels: "17-inch Pair Radial Black",
        price: 380
      },
      {
        id: 3,
        wheels: "18-inch Pair Spoke Silver",
        price: 540
      },
      {
        id: 4,
        wheels: "18-inch Pair Spoke Black",
        price: 670
      }
  ],
  customOrders: [ //this is permanemt state
    {
        id: 1,
        paintId: 3,
        techId: 2,
        wheelsId: 3,
        interiorId: 4,
        timestamp: 1614659931693
    }
]
};

export const getPaints = () => {
    return database.paints.map(paint => ({...paint}))
}

export const getInteriors = () => {
    return database.interiors.map(interiors => ({...interiors}))
}

export const getTechnology = () => {
    return database.tech.map(tech => ({...tech}))
}

export const getWheels = () => {
    return database.wheels.map(wheels => ({...wheels}))
}

export const getOrders = () => {
  return database.customOrders.map(order => ({...order}))
}
export const setPaint = (id) => {
    database.orderBuilder.paintId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.techId = id
}

export const setWheel = (id) => {
    database.orderBuilder.wheelsId = id
}


export const addCustomOrder = () => {
  // Copy the current state of user choices
  const newOrder = {...database.orderBuilder}

  // Add a new primary key to the object
  const lastIndex = database.customOrders.length - 1
  newOrder.id = database.customOrders[lastIndex].id + 1

  // Add a timestamp to the order
  newOrder.timestamp = Date.now()

  // Add the new order object to custom orders state
  database.customOrders.push(newOrder)

  // Reset the temporary state for user choices
  database.orderBuilder = {}

  // Broadcast a notification that permanent state has changed
  document.dispatchEvent(new CustomEvent("stateChanged"))
}