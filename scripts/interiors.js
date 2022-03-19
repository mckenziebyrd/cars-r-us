import { getInteriors } from "./database"

const interiors = getInteriors();

export const Interiors = () => {
    return `<h2>Interiors</h2>`
}