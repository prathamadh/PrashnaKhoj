const express = require("express");
require("dotenv").config();
const app = express();

const cors = require("cors");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", require("./api/router"));

app.listen(3000, () => {
  console.log("Server running");
});
