import {
  getPurchases,
  getTransientState,
  setTransientStateMinerals,
} from "./database.js";

// Step 1, Change Available Minerals to transfer the currently selected Mineral into Transient State.

// Step 2, Add in the Main.JS an event listener for when The Button with the id of Purchase is clicked then run the following funtion.

// Step 3, Once A mineral is selected have GetPurchases Take the current Colony Id, And Add it into the Transient State when clicked.

// Step 4, Have the Purchase Button also add it's own specific ID into Transient State based off the Length of PurchasedMinerals Array. +1

// Step 5, So when Material is selected, Transient State gets { AvailableMaterialId: number } (Which the amount etc will be edited Later.)

// Step 6, Purchase Function will also add it's own ID based off PurchaseMaterial: [] + 1, {Id: 1, AvailableMaterialId: 10}
