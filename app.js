// adding values from .env file

require("dotenv").config();

// setting up express app

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// adding path

const path = require("path");

// hosting public folder

app.use("/", express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});
