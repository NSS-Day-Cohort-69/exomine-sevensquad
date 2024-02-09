import { getMineralTypes, getMinerals, getTransientState } from "./database.js";

// shows the shopping carts current item
export const PurchaseButton = () => {
  document.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id == "purchase") {
      const TransientStateVariable = getTransientState();
      console.log(TransientStateVariable);
      if (
        TransientStateVariable.hasOwnProperty("availableMineralsId") &&
        TransientStateVariable.hasOwnProperty("colonyId")
      ) {
      }
    }
  });
};

export const shoppingCart = (availableMineralId) => {
  const cartElement = document.querySelector("#cartDisplay");
  const myMinerals = getMinerals();
  const myMineralTypes = getMineralTypes();
  // Loops through each mineral
  for (const mineral of myMinerals) {
    if (mineral.id == availableMineralId) {
      for (const mineralType of myMineralTypes) {
        if (mineralType.id == mineral.mineralTypeId) {
          cartElement.innerHTML = `1 Ton of ${mineralType.name}`;
        }
      }
    }
  }
};
