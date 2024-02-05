import { buildFacilityDropdown } from "./facilities.js"
const buildFacDropdownHTML = buildFacilityDropdown()

const selectedContainer = document.querySelector('.facilities')
selectedContainer.innerHTML = buildFacDropdownHTML