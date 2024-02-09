import { shoppingCart } from "./SpacePurchase.js";
import {
  getFacilities,
  getMinerals,
  getMineralTypes,
  setTransientMinerals,
  getTransientState
} from "./database.js";

// Listens for a change from the chosen Material and sets Transient State to the Material
document.addEventListener("change", (changeEvent) => {
  if (changeEvent.target.name === "facilityMaterial") {
    setTransientMinerals(parseInt(changeEvent.target.value));
    shoppingCart(parseInt(changeEvent.target.value));
    console.log(changeEvent.target.value);
    console.log(getTransientState())
  }
});

// Generates the chosen facilities materials
export const facilityMaterialGenerator = (facilityId) => {
  let radioButtonHTML = ``;
  for (const facility of getFacilities()) {
    if (facility.id === facilityId) {
      radioButtonHTML += `<h2 class="facilityMineralsHeader">Facility Minerals for ${facility.name}</h2>
      <div class="mineralButtons">`;
    }
  }
  let mineralArray = [];
  for (const mineral of getMinerals()) {
    if (mineral.facilityId == facilityId) {
      mineralArray.push(mineral);
    }
  }
  for (const availableMineral of mineralArray) {
    for (const mineralType of getMineralTypes()) {
      if (availableMineral.mineralTypeId == mineralType.id) {
        radioButtonHTML += `
            <input
              class="keep-options-grouped"
              type="radio"
              name="facilityMaterial"
              value="${availableMineral.id}"
              data-mineralTypeId="${mineralType.id}"
            >${availableMineral.amount} Tons of ${mineralType.name}</input>
          `;
      }
    }
  }
  radioButtonHTML += `</div>`;
  return radioButtonHTML;
};
