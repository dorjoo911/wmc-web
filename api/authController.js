const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("./user/userModel");
const Response = require("./responseObj");

const SECRET = "nuutsTulkhuur";

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email: email.toLowerCase() });

    if (!userExist) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const passwordMatch = await bcrypt.compare(password, userExist.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const accessToken = jwt.sign(
      {
        id: userExist._id,
        email: userExist.email,
        fullname: userExist.fullname,
        role: userExist.role,
        avatar: userExist.avatar,
      },
      SECRET
    );

    console.log("logged in");
    return res.status(200).json(new Response(false, null, { accessToken }));
  } catch (error) {
    console.error(error);
    return next(error);
  }
};
// exports.login = async (req, res, next) => {
//   const userExist = await User.findOne({ email: req.body.email });
//   const { password } = req.body;

//   if (userExist) {
//     if (bcrypt.compareSync(password, userExist.password)) {
//       const accessToken = jwt.sign(
//         {
//           id: userExist._id,
//           email: userExist.email,
//           fullname: userExist.fullname,
//         },
//         SECRET
//       );
//       res.status(200).json(new Response(false, null, { accessToken }));
//       console.log("logged in");
//       // res.send(userExist);
//     } else {
//       res.send("Wrong password");
//     }
//   } else {
//     console.log("Wrong user or password");
//   }
// };
