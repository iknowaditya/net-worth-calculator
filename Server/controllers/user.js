const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// login..
const handleLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid password" });
    }
    const token = jwt.sign(
      { id: user._id, name: user.name },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    res.status(200).json({ message: "Login successful", user, token });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error });
  }
};

// signup...
const handleSignup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error });
  }
};

// user by ID..
const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User found Successfully", user });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Internal Server Error" });
  }
};

// Get all users..
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ message: "All Users", users });
  } catch (error) {
    console.log("Erro during getting all users:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// user logout..
const logout = async (req, res) => {
  try {
    req.token = null;
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Error during logout:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  handleLogin,
  handleSignup,
  logout,
  getUserById,
  getAllUsers,
};
