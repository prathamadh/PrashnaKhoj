// const express = require("express");
// require("dotenv").config();
// const app = express();
// // const bodyParser = require("body-parser");

// const cors = require("cors");
// const credentials = require("./credentials");
// app.use(credentials);
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//   })
// );
// // app.use(bodyParser.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// app.use("/api", require("./api/router"));

// app.listen(3500, () => {
//   console.log("Server running");
// });
const express = require("express");
require("dotenv").config();
const app = express();

const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:3000", // Replace with the actual origin of your frontend app
  credentials: true, // Allow credentials (cookies, HTTP authentication, etc.)
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", require("./api/router"));

app.listen(3500, () => {
  console.log("Server running");
});
