import {
  getPurchases,
  getColonies,
  getMineralTypes,
  setTransientColony,
} from "./database.js";

//This listens for a change to the governor and sets the Transient State to the aforementioned Governors Planet Note: This could be in the same module as Governors(Move SetState into the eventListener)
document.addEventListener("change", (changeEvent) => {
  if (changeEvent.target.name == "governor-names") {
    setTransientColony(parseInt(changeEvent.target.value));
  }
});

// Creates the Minerals relating to Governors Planets(Shows what they've bought)
export const addMineralsHTML = (governorColonyId) => {
  let htmlString = "<div>";
  for (const colony of getColonies()) {
    if (governorColonyId === colony.id) {
      htmlString += `<h2 id="governorColony">${colony.name} Minerals</h2>`;
      for (const purchase of getPurchases()) {
        const FilteredPurchases = [];
        if (purchase.ColonyId == colony.id) {
          FilteredPurchases.push(purchase);
        }
        for (const mineralType of getMineralTypes()) {
          for (const purchase of FilteredPurchases) {
            if (purchase.mineralTypeId == mineralType.id) {
              htmlString += `<article class="colonyMineralList">${purchase.amount} tons of ${mineralType.name}</article>`;
            }
          }
        }
      }
    }
  }
  htmlString += `</div>`;
  return htmlString;
};
