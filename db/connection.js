const mongoose = require("mongoose");
const connectString = process.env.MONGODB_CONNECT_URI;
mongoose
  .connect(connectString)
  .then(() => {
    console.log("___MongoDB Atls Connected");
  })
  .catch((err) => {
    console.log(`____MongoDB Atlas Failed____${err}`);
  });
