
const database = {
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
  technologies: [
      {
          id: 1,
          technology: "Basic Package - basic sound system",
          price: 3000
      },
      {
        id: 1,
        technology: "Navigation Package - includes integrated navigation controls",
        price: 3700
      },
      {
        id: 3,
        technology: "Visibility Package - includes side and reat cameras",
        price: 4400
      },
      {
        id: 4,
        technology: "Ultra Package - includes navigation and visibility packages",
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
};

export const getPaints = () => {
    return database.paints.map(paint => ({...paint}))
}

export const getInteriors = () => {
    return database.interiors.map(interiors => ({...interiors}))
}

export const getTechnologies = () => {
    return database.technologies.map(technologies => ({...technologies}))
}

export const getWheels = () => {
    return database.wheels.map(wheels => ({...wheels}))
}
