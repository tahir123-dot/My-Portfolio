const Post = require("../models/Media");

const uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "File is required" });
    }

    const { name, description, category, link } = req.body;
    if (!category) {
      return res.status(400).json({ error: "Category is required" });
    }

    const mediaUrl = req.file.path;
    const mediaType = req.file.mimetype.startsWith("image/")
      ? "image"
      : "video";

    const newPost = new Post({
      name,
      description,
      category,
      link,
      mediaUrl,
      mediaType,
    });
    await newPost.save();

    res
      .status(201)
      .json({ message: "File uploaded successfully", post: newPost });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find(); 
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { uploadFile, getAllPosts };
