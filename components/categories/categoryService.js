const getAllCategory = async () => {
  try {
    return DATA;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllCategory };

var DATA = [
  {
    _id: 1,
    name: "Drywall & Acoustical (FED)",
  },
  {
    _id: 2,
    name: "Wall Protection",
  },
  {
    _id: 3,
    name: "Drilled Shafts",
  },
  {
    _id: 4,
    name: "HVAC",
  },
  {
    _id: 5,
    name: "Asphalt Paving",
  },
  {
    _id: 6,
    name: "Electrical",
  },
  {
    _id: 7,
    name: "Sitework & Site Utilities",
  },
  {
    _id: 8,
    name: "Structural & Misc Steel Erection",
  },
  {
    _id: 9,
    name: "Drywall & Acoustical (MOB)",
  },
  {
    _id: 10,
    name: "Electrical",
  },
  {
    _id: 11,
    name: "Rebar & Wire Mesh Install",
  },
  {
    _id: 12,
    name: "Roofing (Asphalt)",
  },
  {
    _id: 13,
    name: "Soft Flooring and Base",
  },
  {
    _id: 14,
    name: "Painting & Vinyl Wall Covering",
  },
  {
    _id: 15,
    name: "Drilled Shafts",
  },
  {
    _id: 16,
    name: "Electrical",
  },
  {
    _id: 17,
    name: "Structural & Misc Steel Erection",
  },
  {
    _id: 18,
    name: "Site Furnishings",
  },
  {
    _id: 19,
    name: "Fire Protection",
  },
  {
    _id: 20,
    name: "Structural & Misc Steel Erection",
  },
];
