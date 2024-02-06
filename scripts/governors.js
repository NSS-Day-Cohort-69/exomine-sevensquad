import { getGoverners } from "./database.js";

const governors = getGoverners();

export const governorsHTML = () => {
  let htmlString = `<label for= "governor-names">Choose a governor</label>
  <select name="governor-names" id="governor-names">-- Choose Governor--</select>`;
  htmlString += `<select name="governor-names" id="governor-names">`;

  for (const governor of governors) {
    if (governor.isActive) {
      htmlString += `<option value="${governor.name}">${governor.name}</option>`;
    }
  }
  htmlString += `</select>`;
  return htmlString;
};
