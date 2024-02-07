import { getPurchases, getColonies } from "./database.js"

const colonies = getColonies()
const purchases = getPurchases()

const governorChoiceChange  = (changeEvent) => {
    if(changeEvent.target.type === "governor") {
        const governorColonyId = changeEvent.dataset.colonyid
        addMineralsHTML(parseInt(governorColonyId))
    }
}
document.addEventListener("change", governorChoiceChange)


const addMineralsHTML = (governorColonyId) => {
    let htmlString = ""
    for (const colony of colonies) {
        if(governorColonyId === colony.id) {
            htmlString += `<h2 id="governorColony">${colony.name} Minerals</h2>`
        }
        // for (const purchase of purchases) {
        //     htmlString += ``
        // }
    }
    
}