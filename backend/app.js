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
const fs = require('fs');
require("dotenv").config();
const app = express();

const elasticsearch = require("elasticsearch");
const es = new elasticsearch.Client({
  host: "https://127.0.0.1:9200",
  httpAuth: "elastic:R9oINbyis1UrD0ZUU726",
  ssl: {
    ca: fs.readFileSync("C:\\Users\\acm\\Desktop\\http_ca.crt"), // Path to your CA certificate file
    rejectUnauthorized: false // Set to false if you want to skip certificate validation
  }
});

const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000", // Replace with the actual origin of your frontend app
  credentials: true, // Allow credentials (cookies, HTTP authentication, etc.)
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/searchs", async (req, res) => {
  const query = req.query.q.toLowerCase();
  const tokens = query.split(" ");

  const clauses = tokens.map((token) => ({
    span_multi: {
      match: { fuzzy: { desc: { value: token, fuzziness: "AUTO" } } },
    },
  }));

  const payload = {
    bool: {
      must: [{ span_near: { clauses, slop: 0, in_order: false } }],
    },
  };

  const resp = await es.search({
    index: "data",
    body: { query: payload },
    size: 15,
  });

  res.json(resp.hits.hits.map((hit) => hit._source.desc));
});

app.use("/api", require("./api/router"));

app.listen(3500, () => {
  console.log("Server running");
});
