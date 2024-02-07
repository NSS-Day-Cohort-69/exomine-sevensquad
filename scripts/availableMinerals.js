import { getMinerals, getMineralTypes } from "./database.js"

const mineralList = getMinerals()

// export const buildMineralHTML = () => {

//     let generateMineralHTML = `<div id="mineralDisplay">`
//     let incrementCounter = 1
//     for (const mineral of mineralList) {
//         generateMineralHTML += `<input type='radio' 
//         id='${incrementCounter}' 
//         name='mineralChoice' 
//         value='${mineral.name}' 
//         data-id='${mineral.id}'
//         data-facilityId='${mineral.facilityId}'>
//         <label>${mineral.amount} tons of ${mineral.name}</label>`
//         incrementCounter++
//     }
//     generateMineralHTML += `</div>`
// return generateMineralHTML 

// }

export const showAvailableMinerals = (event) => {
    debugger
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
    if (facilityId === availableMinerals.facilityId) {
        let radioButtonHTML = `<h2>Minerals for ${facility.name}</h2>`
    }
    let mineralArray = [];
    for (const minerals of getMinerals()) {
      if (minerals.facilityId == facilityId) {
        mineralArray.push(minerals);
      }
    }
    for (const facilitySpecificMinerals of mineralArray) {
      for (const allMineralTypes of getMineralTypes()) {
        if (facilitySpecificMinerals.mineralTypeId == allMineralTypes.id) {
          radioButtonHTML += `
            <input
              type="radio"
              name="facilityMaterial"
              data-matFacId="${facilitySpecificMinerals.id}"
              data-mineralTypeId="${allMineralTypes.id}"
            >${facilitySpecificMinerals.amount} Tons of ${allMineralTypes.name}</input>
          `;
        }
      }
    }
    return radioButtonHTML;
  };
  
