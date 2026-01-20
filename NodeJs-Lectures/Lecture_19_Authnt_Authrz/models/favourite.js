import mongoose from "mongoose";

// method - 1

const favouriteSchema = new mongoose.Schema({
  houseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Home",
    required: true,
    unique: true,
  },
});

export default mongoose.model("Favourite", favouriteSchema);

// // method-2

// export default mongoose.model(
//   "Favourite",
//   new mongoose.Schema({
//     houseId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Home",
//       required: true,
//       unique: true,
//     },
//   }),
// );

