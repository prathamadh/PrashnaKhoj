const db = require("../config/connectdb");

module.exports = {
  getData: (callBack) => {
    const name = "photp copy.jpg";

    db.get("SELECT data FROM images WHERE name = ?", [name], (err, row) => {
      if (err) {
        return callBack(err);
      }

      if (row) {
        fs.writeFileSync("retrieved_image.jpg", row.data);

        return callBack(null, row.data);
      }
    });

    db.close();
  },
};
