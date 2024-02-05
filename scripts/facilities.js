import { getFacilities } from "./database.js";

const allFacilities = getFacilities();

export const buildFacilityDropdown = () => {
    let buildFacilityHTML = `<select>`
    for (const facility of allFacilities) {
        buildFacilityHTML += `<option value='${facility.name}'
         data-type='facility' data-id='${facility.id}'>
          ${facility.name} </option>`
    }
    buildFacilityHTML += `</select>`

    return buildFacilityHTML
}