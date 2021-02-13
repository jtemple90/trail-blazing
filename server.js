//////////////////////
// SERVER DEPENDENCIES
//////////////////////
const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 4000;

const app = express();

//////////////////////
// LISTENER ON SERVER
//////////////////////
app.listen(PORT, () => console.log(`Running on port ${PORT}`));
