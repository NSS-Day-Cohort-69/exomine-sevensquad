import { buildFacilityDropdown } from "./facilities.js";
import { governorsHTML } from "./governors.js";

const createPage = () => {
  const documentHTML = document.querySelector(`#ContainerJS`);
  const pageHtml = `
  <h1>Exomine Mining Market Place</h1>
    <div id="mainContainer">
        <div id="choicesDropdownContainer">
            <div id="peoplePlanets">
                <section>
                    ${governorsHTML()}
                </section>
                <section>
                    ${addMinerals()}
                </section>
            </div>
        <div id="FacilityHTML">
                ${buildFacilityDropdown()}
            </div>
        </div>
        <div>
            ${buildMineralHTML()}
            <button id="purchase">Purchase Minerals!</button>
        </div>
    </div>
    `;
  documentHTML.innerHTML = pageHtml;
};

createPage();
