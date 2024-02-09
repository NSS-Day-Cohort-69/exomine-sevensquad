const database = {
  Colonies: [
    { id: 1, name: "Mars" },
    { id: 2, name: "Venus" },
    { id: 3, name: "Jupiter" },
    { id: 4, name: "Saturn" },
    { id: 5, name: "Mercury" },
    { id: 6, name: "Neptune" },
    { id: 7, name: "Uranus" },
    { id: 8, name: "Pluto" },
    { id: 9, name: "Earth" },
    { id: 10, name: "Alpha Centauri Bb" },
  ],
  purchasedMinerals: [],
  availableMinerals: [
    { id: 1, mineralTypeId: 1, amount: 10, facilityId: 5 },
    { id: 2, mineralTypeId: 2, amount: 90, facilityId: 7 },
    { id: 3, mineralTypeId: 3, amount: 30, facilityId: 1 },
    { id: 4, mineralTypeId: 4, amount: 20, facilityId: 1 },
    { id: 5, mineralTypeId: 5, amount: 5, facilityId: 3 },
    { id: 6, mineralTypeId: 6, amount: 60, facilityId: 4 },
    { id: 7, mineralTypeId: 7, amount: 2, facilityId: 1 },
    { id: 8, mineralTypeId: 8, amount: 11, facilityId: 3 },
    { id: 9, mineralTypeId: 9, amount: 66, facilityId: 2 },
    { id: 10, mineralTypeId: 10, amount: 41, facilityId: 2 },
    { id: 11, mineralTypeId: 11, amount: 99, facilityId: 6 },
    { id: 12, mineralTypeId: 12, amount: 102, facilityId: 7 },
    { id: 13, mineralTypeId: 13, amount: 71, facilityId: 7 },
    { id: 14, mineralTypeId: 14, amount: 1, facilityId: 1 },
    { id: 15, mineralTypeId: 15, amount: 10, facilityId: 5 },
    { id: 16, mineralTypeId: 16, amount: 23, facilityId: 3 },
    { id: 17, mineralTypeId: 17, amount: 11, facilityId: 2 },
    { id: 18, mineralTypeId: 18, amount: 62, facilityId: 7 },
    { id: 19, mineralTypeId: 19, amount: 10, facilityId: 6 },
    { id: 20, mineralTypeId: 6, amount: 2, facilityId: 6 },
    { id: 21, mineralTypeId: 3, amount: 100, facilityId: 6 },
    { id: 22, mineralTypeId: 8, amount: 61, facilityId: 2 },
    { id: 23, mineralTypeId: 20, amount: 86, facilityId: 1 },
    { id: 24, mineralTypeId: 10, amount: 14, facilityId: 5 },
    { id: 25, mineralTypeId: 21, amount: 39, facilityId: 5 },
    { id: 26, mineralTypeId: 22, amount: 12, facilityId: 5 },
    { id: 27, mineralTypeId: 23, amount: 22, facilityId: 1 },
    { id: 28, mineralTypeId: 14, amount: 10, facilityId: 1 },
  ],
  MineralTypes: [
    { id: 1, name: "Quartz" },
    { id: 2, name: "Feldspar" },
    { id: 3, name: "Iron" },
    { id: 4, name: "Calcite" },
    { id: 5, name: "Magnetite" },
    { id: 6, name: "Gypsum" },
    { id: 7, name: "Malachite" },
    { id: 8, name: "Mica" },
    { id: 9, name: "Halite" },
    { id: 10, name: "Copper" },
    { id: 11, name: "Beryl" },
    { id: 12, name: "Olivine" },
    { id: 13, name: "Fluorite" },
    { id: 14, name: "Garnet" },
    { id: 15, name: "Apatite" },
    { id: 16, name: "Barite" },
    { id: 17, name: "Dolomite" },
    { id: 18, name: "Graphite" },
    { id: 19, name: "Jasper" },
    { id: 20, name: "Orthoclase" },
    { id: 21, name: "Peridot" },
    { id: 22, name: "Lapis Lazuli" },
    { id: 23, name: "Rhodonite" },
  ],
  Facilities: [
    { id: 1, name: "Coal'n Co.", isActive: true },
    { id: 2, name: "Ironsing. Inc", isActive: true },
    { id: 3, name: "Miners Landing", isActive: true },
    { id: 4, name: "Dwarven Caves", isActive: true },
    { id: 5, name: "Cave Rave", isActive: true },
    { id: 6, name: "Caved In", isActive: true },
    { id: 7, name: "Blarf", isActive: true },
  ],
  Governors: [
    { id: 1, name: "Alice Johnson", ColonyId: 8, isActive: true },
    { id: 2, name: "Benjamin Martinez", ColonyId: 3, isActive: true },
    { id: 3, name: "Chloe Davis", ColonyId: 6, isActive: false },
    { id: 4, name: "Daniel Turner", ColonyId: 1, isActive: true },
    { id: 5, name: "Emily Rodriguez", ColonyId: 9, isActive: true },
    { id: 6, name: "Finn Campbell", ColonyId: 2, isActive: false },
    { id: 7, name: "Grace Thompson", ColonyId: 7, isActive: true },
    { id: 8, name: "Henry Carter", ColonyId: 4, isActive: true },
    { id: 9, name: "Isabella Murphy", ColonyId: 10, isActive: true },
    { id: 10, name: "Jack Foster", ColonyId: 5, isActive: false },
    { id: 11, name: "Lily Powell", ColonyId: 8, isActive: true },
    { id: 12, name: "Mason Harris", ColonyId: 2, isActive: true },
    { id: 13, name: "Nora Russell", ColonyId: 6, isActive: true },
    { id: 14, name: "Oliver Price", ColonyId: 3, isActive: true },
    { id: 15, name: "Penelope Mitchell", ColonyId: 9, isActive: true },
    { id: 16, name: "Quinn Peterson", ColonyId: 1, isActive: true },
    { id: 17, name: "Riley Kelly", ColonyId: 7, isActive: true },
    { id: 18, name: "Sophia Cooper", ColonyId: 4, isActive: true },
    { id: 19, name: "Thomas Reed", ColonyId: 10, isActive: false },
    { id: 20, name: "Violet Sanchez", ColonyId: 5, isActive: true },
  ],
  transientState: {},
};

export const getFacilities = () => {
  return database.Facilities.map((text) => ({ ...text }));
};

export const getColonies = () => {
  return database.Colonies.map((text) => ({ ...text }));
};

export const getGovernors = () => {
  return database.Governors.map((text) => ({ ...text }));
};

export const getMinerals = () => {
  return database.availableMinerals.map((text) => ({ ...text }));
};

export const getMineralTypes = () => {
  return database.MineralTypes.map((text) => ({ ...text }));
};

export const getPurchases = () => {
  return database.purchasedMinerals.map((text) => ({ ...text }));
};

export const getTransientState = () => {
  return database.transientState;
};

export const setTransientMinerals = (num) => {
  for (const mineral of getMinerals()) {
    if (mineral.id == num) {
      database.transientState.availableMineralsId = mineral.id;
      database.transientState.mineralTypeId = mineral.mineralTypeId;
      database.transientState.facilityId = mineral.facilityId;
    }
  }
};

export const setTransientColony = (num) => {
  for (const colony of getColonies()) {
    if (colony.id == num) {
      database.transientState.colonyId = num;
    }
  }
};

export const addPurchasedObject = (object) => {
  database.purchasedMinerals.push(object);
  console.log(database.purchasedMinerals);
};
