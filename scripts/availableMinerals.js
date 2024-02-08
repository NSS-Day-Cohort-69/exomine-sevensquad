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
  for (const allFacilities of getFacilities()) {
    if (allFacilities.id === facilityId) {
      radioButtonHTML += `<h2>Facility Minerals for ${allFacilities.name}</h2>`;
    }
  }
  let mineralArray = [];
  for (const minerals of getMinerals()) {
    if (minerals.facilityId == facilityId) {
      mineralArray.push(minerals);
    }
  }
  for (const availableMineral of mineralArray) {
    for (const allMineralTypes of getMineralTypes()) {
      if (availableMineral.mineralTypeId == allMineralTypes.id) {
        radioButtonHTML += `
            <input
              type="radio"
              name="facilityMaterial"
              value="${availableMineral.id}"
              data-mineralTypeId="${allMineralTypes.id}"
            >${availableMineral.amount} Tons of ${allMineralTypes.name}</input>
          `;
      }
    }
  }
  return radioButtonHTML;
};
