//////////////////////
// SERVER DEPENDENCIES
//////////////////////
const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 4000;

const routes = require("./routes");

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(express.json());
app.use(cors(corsOptions));

app.use("/routes/blogPosts.js", routes.blogPosts);

//////////////////////
// LISTENER ON SERVER
//////////////////////
app.listen(PORT, () => console.log(`Running on port ${PORT}`));
