import { ObjectId } from "mongodb";
import { getDb } from "../utils/databaseUtil.js";

export class Home {
  constructor(houseName, price, location, rating, photoURL, description, _id) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoURL = photoURL;
    this.description = description;
    if (_id) {
      this._id = _id;
    }
  }

  save() {
    const db = getDb();
    if (this._id) {
      const updateFields = {
        houseName: this.houseName,
        price: this.price,
        location: this.location,
        rating: this.rating,
        photoURL: this.photoURL,
        description: this.description,
      };

      return db.collection("homes").updateOne({ _id: new ObjectId(String(this._id)) }, { $set: updateFields });
    } else {
      return db.collection("homes").insertOne(this);
    }
  }

  static fetchAll() {
    const db = getDb();
    return db.collection("homes").find().toArray();
  }

  static findById(homeId) {
    const db = getDb();
    return db
      .collection("homes")
      .find({ _id: new ObjectId(String(homeId)) })
      .next();
  }

  static deleteById(homeId) {
    const db = getDb();
    return db.collection("homes").deleteOne({ _id: new ObjectId(String(homeId)) });
  }
}
