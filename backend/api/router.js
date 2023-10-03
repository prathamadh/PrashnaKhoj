const { getdata } = require("./controller");
const router = require("express").Router();

router.get("/", getdata);
module.exports = router;
