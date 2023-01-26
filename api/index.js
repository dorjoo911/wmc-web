const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const Response = require("./responseObj");
const authRouter = require("./authRouter");
const userRouter = require("./user/userRouter");
const postRouter = require("./post/postRouter");

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

app.use("/users", userRouter);
app.use("/login", authRouter);
app.use("/posts", postRouter);

app.use((err, req, res, next) => {
  res.status(500).json(new Response(true, err.message, null));
});

mongoose
  .connect("mongodb+srv://wmc:wmc20@wmccluster1.5v650it.mongodb.net/test")
  .then(() => {
    app.listen(process.env.API_PORT, () => console.log("listening ... 4000"));
  });
// if (process.env.API_PORT) {
//   app.listen(process.env.API_PORT);
// }
module.exports = app;
