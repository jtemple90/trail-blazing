const mongoose = require("mongoose");

const connectionString =
  process.env.MONGODB_URI || "mongodb://localhost:27017/trailblazing";
const configOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

mongoose
  .connect(connectionString, configOptions)
  .then(() => console.log("Successfully connected to the MONGODB server"))
  .catch((err) => console.log("Connections error: ", err));

module.exports = {
  BlogPost: require("./BlogPost"),
  User: require("./User"),
};
