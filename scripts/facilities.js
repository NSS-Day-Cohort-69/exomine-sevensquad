import { getFacilities, getMineralTypes, getMinerals } from "./database.js";

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

export const buildFacilityDropdown = () => {
  let buildFacilityHTML = ` <label> Choose a facility </label>
                              <select name="facility">
                                <option value='' selected disabled hidden> -- Choose Facility -- </option>`;
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

//   ----- PLANNING -----
/*
    There will be a section below this with an h1 saying 'Facility Minerals'
    below that will be the radio buttons yet to be mentioned

        It's important to mention that when the facility is selected from the dropdown-
        the h1 from this section should be updated to include 'for ${Name}'
    cons

    Next I want to think about importing the list of availableMinerals
        then a function with a for of loop to iterate throught the availableMinerals.
            the loop will have an if conditional to check if availableMineral facilityID property is equal to 
            facility ID property IF SO build html for displaying radio menu options for the amount of
            minerals. DISPLAYED AS '90 tons of Chromium'...
*/
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
