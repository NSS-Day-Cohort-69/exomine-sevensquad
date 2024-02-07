import { getPurchases, getColonies, getMineralTypes } from "./database.js";

const colonies = getColonies();
const purchases = getPurchases();
const minerals = getMineralTypes();

export const governorChoiceChange = (changeEvent) => {
  console.log(changeEvent);
  if (changeEvent.target.name == "governor-names") {
    const governorColonyId = changeEvent.target.value;
    const colonyMineralHTML = document.querySelector("#colonyMinerals");
    colonyMineralHTML.innerHTML = addMineralsHTML(parseInt(governorColonyId));
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
