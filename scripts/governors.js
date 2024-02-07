import { getGovernors } from "./database.js";

const governors = getGovernors();

export const governorsHTML = () => {
  let htmlString = `<article id="governor-drop-down"><label for= "governor-names">Choose a governor </label>`;
  htmlString += `<select type="governor" name="governor-names" id="governor-names">`;
  htmlString += `<option value="" selected disabled hidden>Choose a governor...</option>`;
  for (const governor of governors) {
    if (governor.isActive) {
      htmlString += `<option data-type="governor" "data-id="${governor.id}" value="${governor.ColonyId}" data-isActive="${governor.isActive}"value="${governor.name}">${governor.name}</option>`;
    }
  }
  htmlString += `</select></article>`;
  return htmlString;
};
