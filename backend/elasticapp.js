const express = require("express");
const app = express();
const elasticsearch = require("elasticsearch");

// const es = new elasticsearch.Client({ host: "http://localhost:9200",httpAuth: "elastic:R9oINbyis1UrD0ZUU726" });

const es = new elasticsearch.Client({
  host: "https://127.0.0.1:9200",
  httpAuth: "elastic:R9oINbyis1UrD0ZUU726",
  ssl: {
    ca: fs.readFileSync('C:\Users\acm\Desktop\prashnakhoj by ashim\tobedockered\http_ca.crt'), // Path to your CA certificate file
    rejectUnauthorized: false // Set to false if you want to skip certificate validation
  }
});


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
    index: "data",
    body: { query: payload },
    size: 15,
  });

  res.json(resp.hits.hits.map((hit) => hit._source.desc));
});

app.listen(3000, () => console.log("Server running on port 5000"));
