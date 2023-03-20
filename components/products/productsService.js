const e = require("express");

const getAllProducts = async () => {
  //lấy toàn bộ sản phẩm trong db
  try {
    return DATA;
  } catch (error) {
    throw error;
  }
};

const deleteProductById = async (id) => {
  try {
    const index = DATA.findIndex(
      (item) => item._id.toString() === id.toString()
    );
    if (index >= 0) {
      DATA.splice(index, 1);
    }
  } catch (e) {
    //handle error
    console.log(e);
  }
};

const addProduct = async (name, price, quantity, image, categories) => {
  try {
    const newProduct = {
      _id: DATA.length + 1,
      name,
      price,
      quantity,
      image,
      categories,
    };
    DATA.push(newProduct);
  } catch (error) {
    console.log("Add new product error: " + error);
  }
};

module.exports = { getAllProducts, deleteProductById, addProduct };

var DATA = [
  {
    _id: 1,
    name: "Lidsoupcont Rp12dn",
    price: 609,
    quantity: 15,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 2,
  },
  {
    _id: 2,
    name: "Vermouth - Sweet, Cinzano",
    price: 1293,
    quantity: 5,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 5,
  },
  {
    _id: 3,
    name: "Nantucket - Orange Mango Cktl",
    price: 1796,
    quantity: 28,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 7,
  },
  {
    _id: 4,
    name: "Sobe - Cranberry Grapefruit",
    price: 1385,
    quantity: 14,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 4,
  },
  {
    _id: 5,
    name: "Pastry - Baked Cinnamon Stick",
    price: 1252,
    quantity: 21,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 1,
  },
  {
    _id: 6,
    name: "Beef - Flank Steak",
    price: 558,
    quantity: 46,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 8,
  },
  {
    _id: 7,
    name: "Slt - Individual Portions",
    price: 520,
    quantity: 5,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 5,
  },
  {
    _id: 8,
    name: "Tomato - Tricolor Cherry",
    price: 332,
    quantity: 35,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 10,
  },
  {
    _id: 9,
    name: "Cheese - Parmesan Grated",
    price: 538,
    quantity: 12,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 10,
  },
  {
    _id: 10,
    name: "Papayas",
    price: 1592,
    quantity: 36,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 4,
  },
  {
    _id: 11,
    name: "Pasta - Lasagna Noodle, Frozen",
    price: 1334,
    quantity: 19,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 2,
  },
  {
    _id: 12,
    name: "Shrimp - Baby, Cold Water",
    price: 912,
    quantity: 20,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 5,
  },
  {
    _id: 13,
    name: "Cookie Dough - Chunky",
    price: 1007,
    quantity: 5,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 5,
  },
  {
    _id: 14,
    name: "Orange - Tangerine",
    price: 828,
    quantity: 30,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 10,
  },
  {
    _id: 15,
    name: "Wine - White, Colubia Cresh",
    price: 497,
    quantity: 50,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 2,
  },
  {
    _id: 16,
    name: "Filter - Coffee",
    price: 1100,
    quantity: 48,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 5,
  },
  {
    _id: 17,
    name: "Shrimp - 31/40",
    price: 525,
    quantity: 41,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 9,
  },
  {
    _id: 18,
    name: "Cookies Almond Hazelnut",
    price: 227,
    quantity: 35,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 2,
  },
  {
    _id: 19,
    name: "Kiwi Gold Zespri",
    price: 845,
    quantity: 2,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 9,
  },
  {
    _id: 20,
    name: "Lamb Shoulder Boneless Nz",
    price: 596,
    quantity: 44,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 1,
  },
  {
    _id: 21,
    name: "Coffee - Colombian, Portioned",
    price: 934,
    quantity: 9,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 5,
  },
  {
    _id: 22,
    name: "Table Cloth 120 Round White",
    price: 1113,
    quantity: 17,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 2,
  },
  {
    _id: 23,
    name: "Yogurt - Assorted Pack",
    price: 125,
    quantity: 15,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 1,
  },
  {
    _id: 24,
    name: "Chips - Miss Vickies",
    price: 1050,
    quantity: 15,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 4,
  },
  {
    _id: 25,
    name: "Table Cloth 144x90 White",
    price: 1531,
    quantity: 49,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 3,
  },
  {
    _id: 26,
    name: "Cheese - Boursin, Garlic / Herbs",
    price: 1285,
    quantity: 16,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 5,
  },
  {
    _id: 27,
    name: "Tuna - Canned, Flaked, Light",
    price: 1685,
    quantity: 42,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 10,
  },
  {
    _id: 28,
    name: "Anchovy Paste - 56 G Tube",
    price: 246,
    quantity: 38,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 3,
  },
  {
    _id: 29,
    name: "Lemon Pepper",
    price: 1020,
    quantity: 15,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 2,
  },
  {
    _id: 30,
    name: "Lentils - Green, Dry",
    price: 1641,
    quantity: 13,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 7,
  },
  {
    _id: 31,
    name: "Miso Paste White",
    price: 1001,
    quantity: 17,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 10,
  },
  {
    _id: 32,
    name: "Broccoli - Fresh",
    price: 677,
    quantity: 25,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 8,
  },
  {
    _id: 33,
    name: "Lamb - Loin, Trimmed, Boneless",
    price: 953,
    quantity: 39,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 6,
  },
  {
    _id: 34,
    name: "Bar - Sweet And Salty Chocolate",
    price: 1468,
    quantity: 42,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 3,
  },
  {
    _id: 35,
    name: "Herb Du Provence - Primerba",
    price: 1953,
    quantity: 48,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 1,
  },
  {
    _id: 36,
    name: "Sausage - Chorizo",
    price: 1240,
    quantity: 13,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 8,
  },
  {
    _id: 37,
    name: "Wine La Vielle Ferme Cote Du",
    price: 1926,
    quantity: 25,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 1,
  },
  {
    _id: 38,
    name: "Crackers - Graham",
    price: 1377,
    quantity: 16,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 3,
  },
  {
    _id: 39,
    name: "Scallops - 10/20",
    price: 1109,
    quantity: 9,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 7,
  },
  {
    _id: 40,
    name: "Radish",
    price: 138,
    quantity: 34,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 9,
  },
  {
    _id: 41,
    name: "Beef - Ox Tongue",
    price: 1109,
    quantity: 33,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 3,
  },
  {
    _id: 42,
    name: "Foam Espresso Cup Plain White",
    price: 242,
    quantity: 8,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 9,
  },
  {
    _id: 43,
    name: "Bread - Rosemary Focaccia",
    price: 1980,
    quantity: 21,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 3,
  },
  {
    _id: 44,
    name: "Beef - Roasted, Cooked",
    price: 1037,
    quantity: 29,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 5,
  },
  {
    _id: 45,
    name: "Brocolinni - Gaylan, Chinese",
    price: 176,
    quantity: 24,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 8,
  },
  {
    _id: 46,
    name: "Beans - Soya Bean",
    price: 1800,
    quantity: 5,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 10,
  },
  {
    _id: 47,
    name: "Kahlua",
    price: 1217,
    quantity: 16,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 2,
  },
  {
    _id: 48,
    name: "Herb Du Provence - Primerba",
    price: 1027,
    quantity: 50,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 8,
  },
  {
    _id: 49,
    name: "Coffee Cup 12oz 5342cd",
    price: 632,
    quantity: 25,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 7,
  },
  {
    _id: 50,
    name: "Teriyaki Sauce",
    price: 1017,
    quantity: 30,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 7,
  },
  {
    _id: 51,
    name: "Turkey - Breast, Bone - In",
    price: 1674,
    quantity: 16,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 9,
  },
  {
    _id: 52,
    name: "Plastic Wrap",
    price: 1835,
    quantity: 17,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 9,
  },
  {
    _id: 53,
    name: "Heavy Duty Dust Pan",
    price: 1105,
    quantity: 45,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 10,
  },
  {
    _id: 54,
    name: "Cake - Sheet Strawberry",
    price: 816,
    quantity: 1,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 2,
  },
  {
    _id: 55,
    name: "Spinach - Frozen",
    price: 1101,
    quantity: 49,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 5,
  },
  {
    _id: 56,
    name: "Vodka - Hot, Lnferno",
    price: 1032,
    quantity: 28,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 2,
  },
  {
    _id: 57,
    name: "Wine - White, Pinot Grigio",
    price: 497,
    quantity: 38,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 6,
  },
  {
    _id: 58,
    name: "Carrots - Purple, Organic",
    price: 438,
    quantity: 46,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 7,
  },
  {
    _id: 59,
    name: "Tuna - Fresh",
    price: 1279,
    quantity: 40,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 8,
  },
  {
    _id: 60,
    name: "Vodka - Moskovskaya",
    price: 588,
    quantity: 23,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 1,
  },
  {
    _id: 61,
    name: "Gooseberry",
    price: 667,
    quantity: 39,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 9,
  },
  {
    _id: 62,
    name: "Pectin",
    price: 1013,
    quantity: 29,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 1,
  },
  {
    _id: 63,
    name: "Zucchini - Yellow",
    price: 1570,
    quantity: 30,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 9,
  },
  {
    _id: 64,
    name: "Lamb Leg - Bone - In Nz",
    price: 297,
    quantity: 44,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 4,
  },
  {
    _id: 65,
    name: "Aspic - Light",
    price: 1237,
    quantity: 44,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 3,
  },
  {
    _id: 66,
    name: "Banana - Leaves",
    price: 1360,
    quantity: 3,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 9,
  },
  {
    _id: 67,
    name: "Crush - Orange, 355ml",
    price: 1846,
    quantity: 36,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 4,
  },
  {
    _id: 68,
    name: "Currants",
    price: 140,
    quantity: 16,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 4,
  },
  {
    _id: 69,
    name: "Crush - Grape, 355 Ml",
    price: 1863,
    quantity: 23,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 1,
  },
  {
    _id: 70,
    name: "Caviar - Salmon",
    price: 884,
    quantity: 48,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 6,
  },
  {
    _id: 71,
    name: "Broom And Brush Rack Black",
    price: 373,
    quantity: 16,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 10,
  },
  {
    _id: 72,
    name: "Beef - Salted",
    price: 696,
    quantity: 20,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 1,
  },
  {
    _id: 73,
    name: "Onions - Cippolini",
    price: 323,
    quantity: 19,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 6,
  },
  {
    _id: 74,
    name: "Pork - Sausage Casing",
    price: 1297,
    quantity: 40,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 7,
  },
  {
    _id: 75,
    name: "Orange - Canned, Mandarin",
    price: 932,
    quantity: 42,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 7,
  },
  {
    _id: 76,
    name: "Pasta - Fusili, Dry",
    price: 510,
    quantity: 38,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 9,
  },
  {
    _id: 77,
    name: "Beef - Montreal Smoked Brisket",
    price: 171,
    quantity: 46,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 10,
  },
  {
    _id: 78,
    name: "Tuna - Loin",
    price: 1388,
    quantity: 16,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 6,
  },
  {
    _id: 79,
    name: "Beef - Eye Of Round",
    price: 1439,
    quantity: 35,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 1,
  },
  {
    _id: 80,
    name: "Juice - Tomato, 10 Oz",
    price: 191,
    quantity: 47,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 4,
  },
  {
    _id: 81,
    name: "Lady Fingers",
    price: 667,
    quantity: 31,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 7,
  },
  {
    _id: 82,
    name: "Beets - Candy Cane, Organic",
    price: 766,
    quantity: 33,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 4,
  },
  {
    _id: 83,
    name: "Fish - Soup Base, Bouillon",
    price: 480,
    quantity: 50,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 4,
  },
  {
    _id: 84,
    name: "Dates",
    price: 1810,
    quantity: 13,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 7,
  },
  {
    _id: 85,
    name: "Shichimi Togarashi Peppeers",
    price: 1146,
    quantity: 32,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 3,
  },
  {
    _id: 86,
    name: "Bread - Burger",
    price: 851,
    quantity: 3,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 9,
  },
  {
    _id: 87,
    name: "V8 - Tropical Blend",
    price: 472,
    quantity: 26,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 1,
  },
  {
    _id: 88,
    name: "Turnip - White, Organic",
    price: 876,
    quantity: 49,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 8,
  },
  {
    _id: 89,
    name: "Peas Snow",
    price: 884,
    quantity: 17,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 3,
  },
  {
    _id: 90,
    name: "Samosa - Veg",
    price: 1949,
    quantity: 43,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 6,
  },
  {
    _id: 91,
    name: "Mousse - Banana Chocolate",
    price: 573,
    quantity: 19,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 10,
  },
  {
    _id: 92,
    name: "Chicken - Tenderloin",
    price: 281,
    quantity: 17,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 5,
  },
  {
    _id: 93,
    name: "Steampan Lid",
    price: 1705,
    quantity: 34,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 8,
  },
  {
    _id: 94,
    name: "Broom - Corn",
    price: 929,
    quantity: 44,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 5,
  },
  {
    _id: 95,
    name: "Tortillas - Flour, 8",
    price: 683,
    quantity: 7,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 6,
  },
  {
    _id: 96,
    name: "Bread - 10 Grain",
    price: 581,
    quantity: 11,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 7,
  },
  {
    _id: 97,
    name: "Rappini - Andy Boy",
    price: 1048,
    quantity: 16,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 2,
  },
  {
    _id: 98,
    name: "Huck White Towels",
    price: 192,
    quantity: 5,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 8,
  },
  {
    _id: 99,
    name: "Carrots - Purple, Organic",
    price: 537,
    quantity: 7,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 2,
  },
  {
    _id: 100,
    name: "Pants Custom Dry Clean",
    price: 1920,
    quantity: 38,
    image:
      "https://cdn.tridge.com/image/original/1d/65/e3/1d65e30bbad30aa96e6048e0d6f8f9ae39164588.jpg",
    categories: 2,
  },
];
