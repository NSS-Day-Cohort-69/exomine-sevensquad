import { getMineralTypes, getMinerals, getTransientState, getPurchases, addPurchasedObject, setTransientMinerals } from "./database.js";

const purchases = getPurchases()


// Purchase Button
export const PurchaseButton = () => {
  document.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id == "purchase") {
      let TransientStateVariable = getTransientState();
      console.log(TransientStateVariable);
      if (TransientStateVariable.hasOwnProperty("availableMineralsId") && TransientStateVariable.hasOwnProperty("colonyId")) {
        let clonedTransientState = structuredClone(TransientStateVariable)
        pushMineralToArray(purchases, clonedTransientState)
        TransientStateVariable = {}
        
        console.log(purchases)
      } 
      }
    })
  };

  

// shows the shopping carts current item
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


const pushMineralToArray = (arr, newObject) => {
  if (!arr.some(obj => obj.mineralTypeId === newObject.mineralTypeId)) {
    addPurchasedObject(newObject)
  }
}