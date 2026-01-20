import { pool as db } from "../utils/databaseUtil.js";

export class Home {
  constructor(houseName, price, location, rating, photoURL, description, id) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoURL = photoURL;
    this.description = description;
    this.id = id;
  }

  save() {
    if (this.id) {
      return db.execute(
        "UPDATE homes SET houseName=?, price=?, location=?, rating=?, photoURL=?, description=? WHERE id=?",
        [this.houseName, this.price, this.location, this.rating, this.photoURL, this.description, this.id],
      );
    } else {
      return db.execute(
        "INSERT INTO homes (houseName, price, location, rating, photoURL, description) VALUES(?,?,?,?,?,?)",
        [this.houseName, this.price, this.location, this.rating, this.photoURL, this.description],
      );
    }
  }

  static fetchAll() {
    return db.execute("SELECT * FROM homes");
  }

  static findById(homeId) {
    return db.execute("SELECT * FROM homes WHERE id=?", [homeId]);
  }

  static deleteById(homeId) {
    return db.execute("DELETE FROM homes WHERE id=?", [homeId]);
  }
}

// .then(([rows, fields]) => {
//   console.log("Getting from DB", rows);
// })
// .catch((error) => {
//   console.log("Error while reading home", error);
// });
