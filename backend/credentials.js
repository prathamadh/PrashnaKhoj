const allowedOrigins = "http://localhost:3000";

const credentials = (req, res, next) => {
  const origin = req.header.origin;
  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Credentials", true);
  }
  next();
};

module.exports = credentials;
