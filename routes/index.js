var express = require("express");
var router = express.Router();
const userController = require("../components/users/UserController");
// /* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Trang chu" });
});

router.get("/login", function (req, res, next) {
  //hiện thị trang login
  res.render("user/login");
});

router.get("/elements/form", function (req, res, next) {
  //hiện thị trang form
  res.render("elements/form");
});

router.get("/elements/table", function (req, res, next) {
  //hiện thị trang table
  res.render("elements/table");
});

router.get("/elements/chart", function (req, res, next) {
  //hiện thị trang chart
  res.render("elements/chart");
});

router.post("/login", async function (req, res, next) {
  //xử lý login
  /*
    nếu thành công sẽ chuyển sang trang chủ
    ngược lại vẫn ở trang login
  */
  const { email, password } = req.body;
  const result = await userController.login(email, password);
  if (result) {
    return res.redirect("/cpanel/products/list");
  } else {
    return res.redirect("/login");
  }
});
module.exports = router;
