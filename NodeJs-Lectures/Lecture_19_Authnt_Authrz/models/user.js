import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
  },

  lastName: String,

  email: {
    type: String,
    required: [true, "Email is required"],
  },

  password: {
    type: String,
    required: [true, "Password is required"],
  },

  userType: {
    type: String,
    enum: ["guest", "host"],
    default: "guest",
  },
});

export default mongoose.model("User", userSchema);
