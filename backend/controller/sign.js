const { generateToken } = require("../middleware/userMiddleware");
const User = require("../models/user");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(password, salt);

    const newUser = new User({ email, password: hashpassword });

    const response = await newUser.save();

    res.status(201).json({ message: "Added successfully", response: response });
  } catch (error) {
    console.error("Error in Signup : ", error);
    res.status(500).json({ message: "Server Error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const finduser = await User.findOne({ email });
    if (!finduser) {
      return res.status(400).json({ error: "User not found" });
    }

    //  Check if password exists
    if (!finduser.password) {
      return res.status(400).json({ message: "User password not set!" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, finduser.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    //  Generate JWT Token
    const token = generateToken(finduser);

    res.status(200).json({
      message: "Successfully logged in",
      user: {
        id: finduser._id,
        email: finduser.email,
      },
      token: token,
    });
  } catch (error) {
    console.error("Error Login: ", error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { signup, login };
