import { getGovernors } from "./database.js";

const governors = getGovernors();

export const governorsHTML = () => {
  let htmlString = `<label for= "governor-names">Choose a governor</label>`;
  htmlString += `<select name="governor-names" id="governor-names">`;

  for (const governor of governors) {
    if (governor.isActive) {
      htmlString += `<option value="${governor.name}">${governor.name}</option>`;
    }
  }
  htmlString += `</select>`;
  return htmlString;
};
