const database = {
  Colonies: [
    { id: 1, Colony: "Mars", purchasedMinerals: [] },
    { id: 2, Colony: "Venus", purchasedMinerals: [] },
    { id: 3, Colony: "Jupiter", purchasedMinerals: [] },
    { id: 4, Colony: "Saturn", purchasedMinerals: [] },
    { id: 5, Colony: "Mercury", purchasedMinerals: [] },
    { id: 6, Colony: "Neptune", purchasedMinerals: [] },
    { id: 7, Colony: "Uranus", purchasedMinerals: [] },
    { id: 8, Colony: "Pluto", purchasedMinerals: [] },
    { id: 9, Colony: "Earth", purchasedMinerals: [] },
    { id: 10, Colony: "Alpha Centauri Bb", purchasedMinerals: [] },
  ],
  AvailableMinieral: [
    { id: 1, type: "Quartz", amount: 10, facilityId: 5 },
    { id: 2, type: "Feldspar", amount: 90, facilityId: 7 },
    { id: 3, type: "Iron", amount: 30, facilityId: 1 },
    { id: 4, type: "Calcite", amount: 20, facilityId: 1 },
    { id: 5, type: "Magnetite", amount: 5, facilityId: 3 },
    { id: 6, type: "Gypsum", amount: 60, facilityId: 4 },
    { id: 7, type: "Malachite", amount: 2, facilityId: 1 },
    { id: 8, type: "Mica", amount: 11, facilityId: 3 },
    { id: 9, type: "Halite", amount: 66, facilityId: 2 },
    { id: 10, type: "Copper", amount: 41, facilityId: 2 },
    { id: 11, type: "Beryl", amount: 99, facilityId: 6 },
    { id: 12, type: "Olivine", amount: 102, facilityId: 7 },
    { id: 13, type: "Fluorite", amount: 71, facilityId: 7 },
    { id: 14, type: "Garnet", amount: 1, facilityId: 1 },
    { id: 15, type: "Apatite", amount: 10, facilityId: 5 },
    { id: 16, type: "Barite", amount: 23, facilityId: 3 },
    { id: 17, type: "Dolomite", amount: 11, facilityId: 2 },
    { id: 18, type: "Graphite", amount: 62, facilityId: 7 },
    { id: 19, type: "Jasper", amount: 10, facilityId: 6 },
    { id: 20, type: "Gypsum", amount: 2, facilityId: 6 },
    { id: 21, type: "Iron", amount: 100, facilityId: 6 },
    { id: 22, type: "Mica", amount: 61, facilityId: 2 },
    { id: 23, type: "Orthoclase", amount: 86, facilityId: 1 },
    { id: 24, type: "Copper", amount: 14, facilityId: 5 },
    { id: 25, type: "Peridot", amount: 39, facilityId: 5 },
    { id: 26, type: "Lapis Lazuli", amount: 12, facilityId: 5 },
    { id: 27, type: "Rhodonite", amount: 22, facilityId: 1 },
    { id: 28, type: "Garnet", amount: 10, facilityId: 1 },
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
  Governers: [
    { id: 1, name: "Alice Johnson", ColonyId: 8, isActive: true },
    { id: 2, name: "Benjamin Martinez", ColonyId: 3, isActive: true },
    { id: 3, name: "Chloe Davis", ColonyId: 6, isActive: true },
    { id: 4, name: "Daniel Turner", ColonyId: 1, isActive: true },
    { id: 5, name: "Emily Rodriguez", ColonyId: 9, isActive: true },
    { id: 6, name: "Finn Campbell", ColonyId: 2, isActive: true },
    { id: 7, name: "Grace Thompson", ColonyId: 7, isActive: true },
    { id: 8, name: "Henry Carter", ColonyId: 4, isActive: true },
    { id: 9, name: "Isabella Murphy", ColonyId: 10, isActive: true },
    { id: 10, name: "Jack Foster", ColonyId: 5, isActive: true },
    { id: 11, name: "Lily Powell", ColonyId: 8, isActive: true },
    { id: 12, name: "Mason Harris", ColonyId: 2, isActive: true },
    { id: 13, name: "Nora Russell", ColonyId: 6, isActive: true },
    { id: 14, name: "Oliver Price", ColonyId: 3, isActive: true },
    { id: 15, name: "Penelope Mitchell", ColonyId: 9, isActive: true },
    { id: 16, name: "Quinn Peterson", ColonyId: 1, isActive: true },
    { id: 17, name: "Riley Kelly", ColonyId: 7, isActive: true },
    { id: 18, name: "Sophia Cooper", ColonyId: 4, isActive: true },
    { id: 19, name: "Thomas Reed", ColonyId: 10, isActive: true },
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

export const getGoverners = () => {
  return database.Governers.map((text) => ({ ...text }));
};
