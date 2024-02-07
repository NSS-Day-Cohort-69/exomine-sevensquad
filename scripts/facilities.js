import { getFacilities } from "./database.js";

// Gets the list of facilities

const allFacilities = getFacilities();

//This gets a random number that is then given in the facility dropdown function

const getRandomNum = () => {
  const randomToSxThou = Math.floor(Math.random() * 6000) + 1;
  return randomToSxThou;
};

/*
 Function that iterates through the Facilities array and generates the html facility dropdown
  with the data and names of the facilities.
 Also creates and assigns the staff property randomly up to 6000. 
 IF CONDITIONAL to check WHETHER staff property is less than 2000.
  IF SO: set isActive property to false. THEN: create option button with disabled property equal to true.
   ELSE create option button normally.
    RETURN built facility dropdown html
*/

export const buildFacilityDropdown = () => {
  let buildFacilityHTML = ` <label> Choose a facility </label>
                              <select name="facility">
                                <option> -- Choose Facility -- </option>`;
  for (const facility of allFacilities) {
    let randomNum = getRandomNum();
    facility.staff = randomNum;
    if (facility.staff < 2000) {
      facility.isActive = false;
      buildFacilityHTML += `<option disabled='true' value='${facility.name}'
         data-type='facility' data-id='${facility.id}'>
          ${facility.name} </option>`;
    } else {
      buildFacilityHTML += `<option value='${facility.name}'
         data-type='facility' data-id='${facility.id}'>
          ${facility.name} </option>`;
    }
  }
  buildFacilityHTML += `</select>`;

  return buildFacilityHTML;
};

// Event Listener for when, Facilities are Changed
document.addEventListener("change", (event) => {
  if (event.target.name === "facility") {
    const FacilityMineralsDocument = document.querySelector(
      "#facilityMineralsDocument"
    );
    const specificFacilityNum = event.target.id;
    let htmlForMinerals = facilityMaterialGenerator(
      parseInt(specificFacilityNum)
    );
    FacilityMineralsDocument.innerHTML = htmlForMinerals;
  }
});
// Function to Display every Material related to said Function
const facilityMaterialGenerator = (facilityId) => {
  let radioButtonHTML = ``;
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
