var express = require("express");
var router = express.Router();
var fs = require("fs");

//for video upload
var multer = require("multer");
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

var ImageKit = require("imagekit");
var imagekit = new ImageKit({
  publicKey: "public_zGeiGaFUGCH0h70+1Fn4jhoaSpY=",
  privateKey: "private_De01cRVXd0BnQX+2s3lskdHqjQM=",
  urlEndpoint: "https://ik.imagekit.io/vunoob",
});
// end for video upload

const uploadImage = require("../../middle/UploadFile");
const productController = require("../../components/products/productsController");
const categoryController = require("../../components/categories/categoryController");

// http://localhost:3000/cpanel/products/list
router.get("/list", async function (req, res, next) {
  // hiện thị danh sách sản phẩm
  const data = await productController.getAllProducts();
  data.reverse();
  res.render("products/list", { data });
});

// http://localhost:3000/cpanel/products/id/detail
router.get("/:id/detail", function (req, res, next) {
  const { id } = req.params;
  res.render("products/detail", { title: "Detail Product" });
});

// http://localhost:3000/cpanel/products/id/delete
router.get("/:id/delete", async function (req, res, next) {
  try {
    const { id } = req.params;
    await productController.deleteProductById(id);
    return res.json({ status: true });
  } catch (error) {
    return res.json({ status: false, error });
  }
});

// http://localhost:3000/cpanel/products/new
router.get("/new", async function (req, res, next) {
  const categoryList = await categoryController.getAllCategory();
  res.render("products/new", { categoryList });
});

// http://localhost:3000/cpanel/products/new
//middleware: []
router.post(
  "/new",
  [uploadImage.single("image")],
  async function (req, res, next) {
    try {
      let { body, file } = req;
      if (file) {
        let image = `http://172.16.74.18:3000/images/${file.filename}`;
        body = { ...body, image: image };
      }
      let { name, price, image, categories, quantity } = body;
      await productController.addProduct(
        name,
        price,
        quantity,
        categories,
        image
      );
      return res.redirect("/cpanel/products/list");
    } catch (error) {
      console.log(e);
      next(error);
    }
  }
);

module.exports = router;
