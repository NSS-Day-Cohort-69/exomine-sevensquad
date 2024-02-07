import { getFacilities, getMinerals, getMineralTypes } from "./database.js";

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
                                <option value='' selected disabled hidden> -- Choose Facility -- </option>`;
  for (const facility of allFacilities) {
    let randomNum = getRandomNum();
    facility.staff = randomNum;
    if (facility.staff < 2000) {
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