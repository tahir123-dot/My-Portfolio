const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true }, 
  link: {type: String, required: false},
  mediaUrl: { type: String, required: true }, 
  mediaType: { type: String, enum: ["image", "video"], required: true }, 
});

module.exports = mongoose.model("Post", PostSchema);
