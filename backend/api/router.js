const sqlite3 = require("sqlite3").verbose();
const fs = require("fs").promises;
const path = require("path");

const db = new sqlite3.Database("questionpaper20.db");

const router = require("express").Router();

router.post("/", async (req, res) => {
  const { search } = req.body;

  try {
    const rows = await new Promise((resolve, reject) => {
      db.all(
        "select imagecropped from ioecropedquestionpaper where desc like '%' || ? || '%'",
        [search],

        (err, rows) => {
          if (err) {
            console.error(err.message);
            reject(err);
          } else {
            resolve(rows);
          }
        }
      );
    });

    if (rows.length > 0) {
      const results = [];

      for (const row of rows) {
        const imgLoc = row.imagecropped;
        const imagePath = path.join(__dirname, imgLoc);

        const imgRec = await fs.readFile(imagePath);
        const imgRecBase64 = imgRec.toString("base64");
        results.push(`data:image/png;base64,${imgRecBase64}`);
        console.log(imgLoc);
      }

      console.log(`Retrieved ${rows.length} images from the database.`);

      return res.status(200).json({
        success: true,
        results: results,
      });
    } else {
      console.log(`${search} not found in the database.`);
      return res.status(200).json({
        success: false,
        message: "record not found",
      });
    }
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      success: false,
      message: "Error processing the request",
    });
  }
});

module.exports = router;
