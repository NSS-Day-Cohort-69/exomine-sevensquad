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
  let htmlString = "";
  for (const colony of colonies) {
    if (governorColonyId === colony.id) {
      htmlString += `<h2 id="governorColony">${colony.name} Minerals</h2>`;
    }
    for (const allPurchases of purchases) {
      const FilteredPurchases = [];
      if (allPurchases.colondyId == colony.id) {
        FilteredPurchases.push(allPurchases);
      }
    }
  }
  return htmlString;
};
