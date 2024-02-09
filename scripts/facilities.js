import { getFacilities } from "./database.js";
import { facilityMaterialGenerator } from "./availableMinerals.js";

// If the dropdown is changed then display the respective materials for the aforementioned
document.addEventListener("change", (changeEvent) => {
  if (changeEvent.target.name === "facility") {
    const FacilityMineralsDocument = document.querySelector(
      "#facilityMineralsDocument"
    );
    const specificFacilityNum = changeEvent.target.value;
    let htmlForMinerals = facilityMaterialGenerator(
      parseInt(specificFacilityNum)
    );
    FacilityMineralsDocument.innerHTML = htmlForMinerals;
  }
});

//This gets a random number that is then given in the facility dropdown function

const getRandomNum = () => {
  const randomToSxThou = Math.floor(Math.random() * 6000) + 1;
  return randomToSxThou;
};

// Builds Dropdown
export const buildFacilityDropdown = () => {
  let buildFacilityHTML = ` 
  <label> 
    Choose a facility 
  </label>
    <select name="facility">
      <option value='' selected disabled hidden>
        Choose a facility...
          </option>`;
  for (const facility of getFacilities()) {
    let randomNum = getRandomNum();
    facility.staff = randomNum;
    if (facility.staff < 0) {
      facility.isActive = false;
      buildFacilityHTML += `<option disabled='true' value='${facility.id}'
         data-type='facility' data-name='${facility.name}'>
          ${facility.name} </option>`;
    } else {
      buildFacilityHTML += `<option value='${facility.id}'
         data-type='facility' data-name='${facility.name}'>
          ${facility.name} </option>`;
    }
  }
  buildFacilityHTML += `</select>`;

  return buildFacilityHTML;
};
