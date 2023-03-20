const login = async (email, password) => {
  // gọi vào database để check pass và email
  const user = users.find((user) => user.email === email);
  if (user && user.password === password) {
    return user;
  } else {
    return null;
  }
};

const register = async (email = "", password = "", username = "") => {
  try {
    const check = users.find((user) => user.email === email);
    if (
      !check &&
      email.length > 0 &&
      password.length > 0 &&
      username.length > 0
    ) {
      //temp method generate id
      let id = users[users.length - 1].id;
      if (id) {
        id += 1;
      } else {
        id = 0;
      }
      let newUser = {
        id: id,
        email: email,
        password: password,
        name: username,
      };
      users.push(newUser);
      return newUser;
    } else {
      return null;
    }
  } catch (e) {
    console.log(e);
  }
};

module.exports = { login, register };

var users = [
  {
    id: 1,
    email: "abc@gmail.com",
    password: "1234",
    name: "Trần Anh Vũ",
  },
  {
    id: 2,
    email: "xyz@gmail.com",
    password: "1234",
    name: "Trần Văn A",
  },
  {
    id: 3,
    email: "cde@gmail.com",
    password: "1234",
    name: "Trần Văn B",
  },
];
