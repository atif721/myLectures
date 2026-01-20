import fs from "fs";
import path from "path";
import { rootDir } from "../utils/pathUtil.js";

export class Home {
  constructor(houseName, price, location, rating, photoURL) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoURL = photoURL;
  }

  save() {
    Home.fetchAll((registeredHomes) => {
      registeredHomes.push(this);
      const homeDataPath = path.join(rootDir, "data", "home.json");
      fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), (error) => {});
    });
  }

  static fetchAll(callback) {
    const homeDataPath = path.join(rootDir, "data", "home.json");
    fs.readFile(homeDataPath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }
}
