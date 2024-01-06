const sqlite3 = require("sqlite3").verbose();
const fs = require("fs");

const db = new sqlite3.Database("test.db");

// function insertImage() {
//   const name = "photp copy.jpg";

//   const imageData = fs.readFileSync(name);

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

function retrieveImage() {
  const name = "photp copy.jpg";

  db.get("SELECT data FROM images WHERE name = ?", [name], (err, row) => {
    if (err) {
      console.error(err.message);
      return;
    }

    if (row) {
      fs.writeFileSync("retrieved_image.jpg", row.data);
      console.log(`Retrieved ${name} from the database.`);
    } else {
      console.log(`${name} not found in the database.`);
    }
  });
}

retrieveImage();

db.close();
