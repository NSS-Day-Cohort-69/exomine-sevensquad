import { getMineralTypes, getMinerals } from "./database.js";

export const shoppingCart = (availableMineralId) => {
  const cartElement = document.querySelector("#cartDisplay");
  const myMinerals = getMinerals();
  const myMineralTypes = getMineralTypes();
  // Loops through each mineral
  for (const mineral of myMinerals) {
    if (mineral.id == availableMineralId) {
      for (const mineralType of myMineralTypes) {
        if (mineralType.id == mineral.mineralTypeId) {
          cartElement.innerHTML = `<h2>Buying!</h2> 1 Ton of ${mineralType.name}`;
        }
      }
    }
  }
};
