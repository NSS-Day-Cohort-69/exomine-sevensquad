import { buildFacilityDropdown } from "./facilities.js";
import { governorsHTML } from "./governors.js";
import {
  governorChoiceChange,
  purchasedColonyChanged,
} from "./colonyMinerals.js";
import {
  purchasedMineralsChanged,
  showAvailableMinerals,
} from "./availableMinerals.js";
import { purchaseButtonClicked } from "./database.js";

document.addEventListener("change", governorChoiceChange);
document.addEventListener("change", showAvailableMinerals);
document.addEventListener("change", purchasedMineralsChanged);
purchaseButtonClicked();
document.addEventListener("change", purchasedColonyChanged);

const createPage = () => {
  const documentHTML = document.querySelector(`#ContainerJS`);
  const pageHtml = `
  <h1>Exomine Mining Market Place</h1>
    <div id="mainContainer">
        <div id="choicesDropdownContainer">
            ${governorsHTML()}
            <article id="colonyMinerals"></article>
            ${buildFacilityDropdown()}
            <article id='facilityMineralsDocument'><h2>Facility Minerals</h2></article>
            <button id="purchase">Purchase Minerals!</button>
        </div>
    </div>
    `;
  documentHTML.innerHTML = pageHtml;
};

createPage();
