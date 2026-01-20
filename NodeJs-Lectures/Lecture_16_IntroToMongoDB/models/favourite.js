import { getDb } from "../utils/databaseUtil.js";

export class Favourite {
  constructor(houseId) {
    this.houseId = houseId;
  }

  save() {
    const db = getDb();
    return db
      .collection("favourites")
      .findOne({ houseId: this.houseId })
      .then((existingFav) => {
        if (!existingFav) {
          return db.collection("favourites").insertOne(this);
        }
        return new Promise.resolve();
      });
  }

  static getFavourites() {
    const db = getDb();
    return db.collection("favourites").find().toArray();
  }

  static deleteById(delHomeId) {
    const db = getDb();
    return db.collection("favourites").deleteOne({ houseId: delHomeId });
  }
}
