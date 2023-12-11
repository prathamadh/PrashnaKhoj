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

const elasticsearch = require("elasticsearch");
const es = new elasticsearch.Client({ host: "http://localhost:9200" });

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
    index: "updated_qp",
    body: { query: payload },
    size: 15,
  });

  res.json(resp.hits.hits.map((hit) => hit._source.desc));
});

app.use("/api", require("./api/router"));

app.listen(3500, () => {
  console.log("Server running");
});
