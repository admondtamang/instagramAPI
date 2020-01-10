const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  profilePic: {
    type: String
  },
  phone: {
    type: String
  }
}, { timestampstrue: true });

module.exports = mongoose.model("User", userSchema);
