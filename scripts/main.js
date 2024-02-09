import { buildFacilityDropdown } from "./facilities.js";
import { buildGovernorsHTML } from "./governors.js";

// This is a function to create the HTML for our page
const createPage = () => {
  const documentHTML = document.querySelector(`#ContainerJS`);
  const pageHtml = `
  <h1>Exomine Mining Market Place</h1>
    <div id="mainContainer">
        <div id="choicesDropdownContainer">
            ${buildGovernorsHTML()}
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
