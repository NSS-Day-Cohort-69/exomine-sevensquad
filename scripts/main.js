import { buildFacilityDropdown } from "./facilities";
import { governorsHTML } from "./governors";

const createPage = () => {
  const documentHTML = document.querySelector(`#ContainerJS`);
  const pageHtml = `
    <div id="mainContainer">
        <div id="choicesDropdownContainer">
        <div>
            ${governorsHTML()}
            ${addMinerals()}
        ${buildFacilityDropdown()}
        </div>
        <div id="GovernersPlanet">
        Planets
        </div>
        <div>
        ${buildMineralHTML()}
        <button>Purchases Button</button>
        </div>
    </div>
    `;
  documentHTML.innerHTML = pageHtml;
};

createPage();
