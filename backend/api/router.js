// const { getdata } = require("./controller");
const sqlite3 = require("sqlite3").verbose();
const fs = require("fs");
const path = require("path");

const db = new sqlite3.Database("test.db");

const router = require("express").Router();
// const db = require("../config/connectdb");

router.get("/", (req, res) => {
  // function insertImage() {
  //   const name = "photp.jpg";
  //   const imagePath = path.join(__dirname, "photp.jpg");

  //   const imageData = fs.readFileSync(imagePath);

  //   const insert = db.prepare("INSERT INTO images (name,data) VALUES (?,?)");
  //   insert.run(name, imageData);
  //   insert.finalize();

  //   console.log(`Inserted ${name} into db`);
  // }

  // db.serialize(() => {
  //   db.run(
  //     "CREATE TABLE IF NOT EXISTS images (id INTEGER PRIMARY KEY,name TEXT,data BLOB)"
  //   );
  //   insertImage();
  // });

  const name = "photp.jpg";

  db.get("SELECT data FROM images WHERE name = ?", [name], (err, row) => {
    if (err) {
      console.error(err.message);
      return res.status(500).json({
        success: false,
        message: "Database connection error",
      });
    }

    if (row) {
      const imagePath = path.join(__dirname, "Retrieved_image.jpg");
      fs.writeFileSync(imagePath, row.data);
      console.log(`Retrieved ${name} from the database.`);
      return res.status(200).json({
        success: true,
        data: row.data,
      });
    } else {
      console.log(`${name} not found in the database.`);
      return res.status(200).json({
        success: false,
        message: "record not found",
      });
    }
  });
});
module.exports = router;
