const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default:
      "https://res.cloudinary.com/dzqw71hhs/image/upload/v1764166812/myapp/tgkyndzotfbt84h4pcf4.jpg",
  },
  imageId: {
    type: String,
    default: "myapp/tgkyndzotfbt84h4pcf4",
  },
  age: {
    type: Number,
    default: 0,
  },
  country: {
    type: String,
    default: "",
  },
  gender: {
    type: String,
    required: false,
    enum: ["male", "female"],
  },
});

module.exports = mongoose.model("User", UserSchema);
