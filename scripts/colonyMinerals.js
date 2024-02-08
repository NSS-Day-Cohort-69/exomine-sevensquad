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
      for (const allPurchases of getPurchases()) {
        const FilteredPurchases = [];
        if (allPurchases.ColonyId == colony.id) {
          FilteredPurchases.push(allPurchases);
        }
        for (const allMinerals of getMineralTypes()) {
          for (const Filtered of FilteredPurchases) {
            if (Filtered.mineralTypeId == allMinerals.id) {
              htmlString += `<article class="colonyMineralList">${Filtered.amount} tons of ${allMinerals.name}</article>`;
            }
          }
        }
      }
    }
  }
  htmlString += `</div>`;
  return htmlString;
};
