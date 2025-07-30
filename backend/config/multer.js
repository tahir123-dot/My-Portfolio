const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("./cloudinary");

// Define storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    let folder = "uploads"; // Default folder
    if (file.mimetype.startsWith("image/")) {
      folder = "images";
    } else if (file.mimetype.startsWith("video/")) {
      folder = "videos";
    }

    return {
      folder: folder, // Folder name based on file type
      resource_type: file.mimetype.startsWith("video/") ? "video" : "image",
    };
  },
});

// Multer middleware
const upload = multer({ storage });

module.exports = upload;
