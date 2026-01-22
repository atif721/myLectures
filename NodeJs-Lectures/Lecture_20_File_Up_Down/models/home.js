import mongoose from "mongoose";

const homeSchema = new mongoose.Schema({
  houseName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  photoURL: String,
  description: String,
});

// homeSchema.pre("findOneAndDelete", async function () {
//   console.log("Came to delete pre hook favorutie");
//   console.log("fav", Favourite);
//   const homeId = this.getQuery()._id;
//   await Favourite.deleteMany({ houseId: homeId });
// });

export default mongoose.model("Home", homeSchema);

//method-2

// export default mongoose.model(
//   "Home",
//   new mongoose.Schema({
//     houseName: {
//       type: String,
//       required: true,
//     },
//     price: {
//       type: Number,
//       required: true,
//     },
//     location: {
//       type: String,
//       required: true,
//     },
//     rating: {
//       type: Number,
//       required: true,
//     },
//     photoURL: String,
//     description: String,
//   }),
// );
