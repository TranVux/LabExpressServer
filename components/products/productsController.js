const e = require("express");
const productsService = require("./productsService");

const getAllProducts = async () => {
  try {
    return await productsService.getAllProducts();
  } catch (error) {
    throw error;
  }
};

const deleteProductById = async (id) => {
  try {
    return await productsService.deleteProductById(id);
  } catch (error) {
    throw error;
  }
};

const addProduct = async (name, price, quantity, categories, image) => {
  try {
    await productsService.addProduct(name, price, quantity, image, categories);
  } catch (error) {
    throw error;
  }
};
module.exports = { getAllProducts, deleteProductById, addProduct };
