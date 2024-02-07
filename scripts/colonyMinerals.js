import { getPurchases, getColonies } from "./database.js";

const colonies = getColonies();
const purchases = getPurchases();

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
    // for (const purchase of purchases) {
    //     htmlString += ``
    // }
  }
  return htmlString;
};
