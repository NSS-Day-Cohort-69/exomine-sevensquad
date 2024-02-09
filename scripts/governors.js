import { getGovernors } from "./database.js";
import { addMineralsHTML } from "./colonyMinerals.js";

// Checks if buildGovernorHTML was changed and then sets ColonyMineralHTML to the specified Planet
document.addEventListener("change", (changeEvent) => {
  if (changeEvent.target.name == "governor-names") {
    const colonyMineralHTML = document.querySelector("#colonyMinerals");
    colonyMineralHTML.innerHTML = addMineralsHTML(
      parseInt(changeEvent.target.value)
    );
  }
});

// Generates Governor Dropdown
export const buildGovernorsHTML = () => {
  let htmlString = `<article id="governor-drop-down"><label for= "governor-names">Choose a governor </label>`;
  htmlString += `<select type="governor" name="governor-names" id="governor-names">`;
  htmlString += `<option value="" selected disabled hidden>Choose a governor...</option>`;
  for (const governor of getGovernors()) {
    if (governor.isActive) {
      htmlString += `<option data-type="governor" "data-id="${governor.id}" value="${governor.ColonyId}" data-isActive="${governor.isActive}"value="${governor.name}">${governor.name}</option>`;
    }
  }
  htmlString += `</select></article>`;
  return htmlString;
};
