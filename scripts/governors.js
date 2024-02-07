import { getGoverners } from "./database.js";

const governors = getGoverners();

const governorsHTML = () => {
    let htmlString = `<article id="governor-drop-down"><label for= "governor-names">Choose a governor</label>`
    htmlString += `<select name="governor-names" id="governor-names">`
    htmlString += `<option value="" selected disabled hidden>Choose a governor...</option>`
    for (const governor of governors) {
        if (governor.isActive) {
            htmlString += `<option data-type="governor "data-id="${governor.id}" data-colonyId="${governor.colonyId}" data-isActive="${governor.isActive}"value="${governor.name}">${governor.name}</option>`
        }
    }
    htmlString += `</select></article>`
    return htmlString
}
