const { config } = require("dotenv");
var bcrypt = require("bcrypt");
const User = require("../Models/user.model");
var jwt = require("jsonwebtoken");
const respHandler = require("../Handlers");
config();
const SECRET = process.env.SECRET;

const Register = async (req, res) => {
  const { name, email, password } = req.body;
  const genSalt = 10;
  const hash = await bcrypt.hash(password, genSalt);

  if (name != "" || email != "" || wnumber != "" || password != "") {
    try {
      let user = await User.findOne({ where: { email: email } });
      if (user != null) {
        return respHandler.error(res, {
          status: false,
          msg: "Email or Mobile Number already exist",
        });
      }
      let newUser = {
        name: name,
        email: email,
        password: hash,
      };
      let createdUser = await User.create(newUser);
      var token = jwt.sign(
        {
          id: createdUser.id,
        },
        SECRET
      );
      if (token) {
        return respHandler.success(res, {
          status: true,
          data: [{ token: token, user: createdUser }],
          msg: "Admin Account Created Successfully!!",
        });
      }
    } catch (err) {
      return respHandler.error(res, {
        status: false,
        msg: "Something Went Wrong!!",
        error: [err.message],
      });
    }
  } else {
    return respHandler.error(res, {
      status: false,
      msg: "All fields are required!!",
    });
  }
};

const Loging = async (req, res) => {
  const { email, password } = req.body;
  if (email || password != "") {
    try {
      let user = await User.findOne({ where: { email: email } });
      if (!user) {
        return respHandler.error(res, {
          status: false,
          msg: "Email or Mobile Number Is Incorrect",
        });
      }
      const working = await bcrypt.compare(password, user.password);
      if (working) {
        var token = jwt.sign(
          {
            id: user.id,
          },
          SECRET
        );
        user.password = undefined;
        return respHandler.success(res, {
          status: true,
          msg: "Admin login successfully!!",
          data: [{ token: token, user: user }],
        });
      } else {
        return respHandler.error(res, {
          status: false,
          msg: "Email or Mobile Number Is Incorrect",
        });
      }
    } catch (err) {
      return respHandler.error(res, {
        status: false,
        msg: "Something Went Wrong!!",
        error: [err.message],
      });
    }
  } else {
    return respHandler.error(res, {
      status: false,
      msg: "All fields are required!!",
    });
  }
};

module.exports = {
  Register,
  Loging,
};
