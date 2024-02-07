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
                              <select>
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

//   ----- PLANNING -----
/*
    There will be a section below this with an h1 saying 'Facility Minerals'
    below that will be the radio buttons yet to be mentioned
        This section could possibly be built as so... `
                                                    <section class="availableMinerals">
                                                        <h1></h1>
                                                    </section>
                                                    `
        It's important to mention that when the facility is selected from the dropdown-
        the h1 from this section should be updated to include 'for ${Name}'
                                        

    Next I want to think about importing the list of availableMinerals
        then a function with a for of loop to iterate throught the availableMinerals.
            the loop will have an if conditional to check if availableMineral facilityID property is equal to 
            facility ID property IF SO build html for displaying radio menu options for the amount of
            minerals. DISPLAYED AS '90 tons of Chromium'...
*/
