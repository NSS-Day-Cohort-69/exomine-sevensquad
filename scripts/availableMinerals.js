import { shoppingCart } from "./SpacePurchase.js";
import {
  getFacilities,
  getMinerals,
  getMineralTypes,
  setTransientStateMinerals,
} from "./database.js";

export const purchasedMineralsChanged = (changeEvent) => {
  if (changeEvent.target.name === "facilityMaterial") {
    const targetedValue = changeEvent.target.value;
    setTransientStateMinerals(parseInt(targetedValue));
    shoppingCart(parseInt(targetedValue));
  }
};

export const showAvailableMinerals = (event) => {
  if (event.target.name === "facility") {
    const FacilityMineralsDocument = document.querySelector(
      "#facilityMineralsDocument"
    );
    const specificFacilityNum = event.target.value;
    let htmlForMinerals = facilityMaterialGenerator(
      parseInt(specificFacilityNum)
    );
    FacilityMineralsDocument.innerHTML = htmlForMinerals;
  }
};

const facilityMaterialGenerator = (facilityId) => {
  let radioButtonHTML = ``;
  for (const facility of getFacilities()) {
    if (facility.id === facilityId) {
      radioButtonHTML += `<h2>Facility Minerals for ${facility.name}</h2>`;
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
              type="radio"
              name="facilityMaterial"
              value="${availableMineral.id}"
              data-mineralTypeId="${mineralType.id}"
            >${availableMineral.amount} Tons of ${mineralType.name}</input>
          `;
      }
    }
  }
  return radioButtonHTML;
};
