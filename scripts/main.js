import { buildFacilityDropdown } from "./facilities.js";
import { governorsHTML } from "./governors.js";
import {governorChoiceChange} from "./colonyMinerals.js"

document.addEventListener("change", governorChoiceChange)

const createPage = () => {
  const documentHTML = document.querySelector(`#ContainerJS`);
  const pageHtml = `
  <h1>Exomine Mining Market Place</h1>
    <div id="mainContainer">
        <div id="choicesDropdownContainer">
            ${governorsHTML()}
            <article id="colonyMinerals"></article>
            ${buildFacilityDropdown()}
            <button id="purchase">Purchase Minerals!</button>
        </div>
    </div>
    `;
  documentHTML.innerHTML = pageHtml;
};

createPage();
