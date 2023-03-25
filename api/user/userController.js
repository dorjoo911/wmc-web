const Users = require("./userModel");
const bcrypt = require("bcrypt");

// exports.save = async (req, res) => {
//   try {
//     const user = req.body;
//     const userExist = await Users.findOne({ email: req.body.email });
//     // console.log(userExist, "userExist");
//     if (userExist) {
//       res.status(403).json({ message: "User exists, Try diffrent email" });
//     } else {
//       user.password = bcrypt.hashSync(user.password, 10);
//       const result = await new Users(user).save();
//       res.status(201).json(result);
//     }
//   } catch (error) {
//     console.log({
//       success: 0,
//       error: "Oops, something went wrong with your request",
//     });
//   }
// };
exports.save = async (req, res) => {
  try {
    const user = req.body;

    // Validate email address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user.email.toLowerCase())) {
      res.status(400).json({ message: "Please enter a valid email address" });
      return;
    }

    const userExist = await Users.findOne({ email: user.email.toLowerCase() });
    if (userExist) {
      res.status(403).json({ message: "User exists, Try different email" });
    } else {
      user.email = user.email.toLowerCase();
      user.password = bcrypt.hashSync(user.password, 10);
      const result = await new Users(user).save();
      res.status(201).json(result);
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Oops, something went wrong with your request" });
  }
};

exports.getUsers = async (req, res) => {
  let users = [];
  if (req.params.id) {
    users = await Users.findById(req.params.id);
  } else {
    users = await Users.find();
  }
  res.status(200).json(users);
};

exports.updateUserById = async (req, res) => {
  const result = await Users.findByIdAndUpdate(
    { _id: req.params.id },
    req.body
  );
  res.status(200).send(result);
};

exports.deleteUserById = async (req, res) => {
  res.status(200).json(await Users.findByIdAndRemove(req.params.id));
};
