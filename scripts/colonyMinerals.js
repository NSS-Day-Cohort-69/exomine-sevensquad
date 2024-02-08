import {
  getPurchases,
  getColonies,
  getMineralTypes,
  setTransientStateColony,
} from "./database.js";

const colonies = getColonies();
const purchases = getPurchases();
const minerals = getMineralTypes();
//This changes the HTML
export const governorChoiceChange = (changeEvent) => {
  if (changeEvent.target.name == "governor-names") {
    const governorColonyId = changeEvent.target.value;
    const colonyMineralHTML = document.querySelector("#colonyMinerals");
    colonyMineralHTML.innerHTML = addMineralsHTML(parseInt(governorColonyId));
  }
};

export const purchasedColonyChanged = (changeEvent) => {
  if (changeEvent.target.name == "governor-names") {
    const targetedValue = changeEvent.target.value;
    console.log(targetedValue);
    setTransientStateColony(parseInt(targetedValue));
  }
};

const addMineralsHTML = (governorColonyId) => {
  let htmlString = "<div>";
  for (const colony of colonies) {
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
