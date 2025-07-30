const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const user = Schema({
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
});

module.exports = mongoose.model("Admin", user, "Admin");
