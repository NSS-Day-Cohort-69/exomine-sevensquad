import { buildFacilityDropdown } from "./facilities.js";
import { buildGovernorsHTML } from "./governors.js";

// This is a function to create the HTML for our page
const createPage = () => {
  const documentHTML = document.querySelector(`#ContainerJS`);
  const pageHtml = `
  <h1>Exomine Mining Market Place</h1>
    <div id="mainContainer">
      <div id="governorsflex">
        ${buildGovernorsHTML()}
      <div id="colonyMinerals"></div>
    </div>
    <div id="gov-section">
      ${buildFacilityDropdown()}
    </div>
        <div id="facility-flex"> 

          <article id='facilityMineralsDocument'><h2>Facility Minerals</h2></article>
            
          <article id="cart-flex">
            <h2>Space Cart</h2>
            <button id="purchase">Purchase Minerals!</button>
          </article>

        </div>

      </div>
    </div>
    `;
  documentHTML.innerHTML = pageHtml;
};

createPage();
