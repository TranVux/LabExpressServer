var express = require("express");
var router = express.Router();
const UserController = require("../../components/users/UserController");

router.post("/login", async function (req, res, next) {
  try {
    const { email, password } = req.body;

    const result = await UserController.login(email, password);
    if (result != null) {
      const { password, ...newResult } = result;
      return res.json({ data: { ...newResult }, error: false });
    } else {
      return res.json({ error: true });
    }
  } catch (e) {
    console.log(e);
  }
});

router.post("/register", async function (req, res, next) {
  try {
    const { email, password, username } = req.body;

    const result = await UserController.register(email, password, username);
    if (result != null) {
      const { password, ...newResult } = result;
      return res.json({ data: { ...newResult }, error: false });
    } else {
      return res.json({ error: true });
    }
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
