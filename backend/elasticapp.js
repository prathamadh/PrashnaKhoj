const express = require("express");
const app = express();
const elasticsearch = require("elasticsearch");

const es = new elasticsearch.Client({ host: "http://localhost:9200" });

const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:3000", // Replace with the actual origin of your frontend app
  credentials: true, // Allow credentials (cookies, HTTP authentication, etc.)
};

app.use(cors(corsOptions));
app.use(express.static("public")); // assuming your static files are in a folder named 'public'

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

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

app.listen(3000, () => console.log("Server running on port 5000"));
