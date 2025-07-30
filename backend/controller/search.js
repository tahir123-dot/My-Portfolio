const Post = require("../models/Media");

const search = async (req, res) => {
  try {
    const { name, category } = req.query; 
    let filter = {};
    if (name) {
      filter.name = { $regex: name, $options: "i" };
    }
    if (category) {
      filter.category = { $regex: category, $options: "i" }; 
    }

    const products = await Post.find(filter);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

module.exports = { search };
