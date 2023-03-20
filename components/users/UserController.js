const userService = require("./UserService");

const login = async (email, password) => {
  return await userService.login(email, password);
};

const register = async (email, password, username) => {
  return await userService.register(email, password, username);
};

module.exports = { login, register };
