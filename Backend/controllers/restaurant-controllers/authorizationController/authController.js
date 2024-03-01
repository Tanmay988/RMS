// Imports
const bcrypt = require("bcryptjs");
const Usermodel = require("../../../models/userModel");
const getjwtToken = require("../../../utility/get-jwt");

// Register restaurant
exports.register = async (req, res) => {
  const { restaurantName, email, phoneNo, password, confirmPassword } =
    req.body;

  try {
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const user = await Usermodel.findOne({ restaurantName });

    const findEmail = await Usermodel.findOne({ email });

    const findPhone = await Usermodel.findOne({ phoneNo });

    if (user) {
      return res.status(400).json({ message: "Restaurant already exists" });
    }
    if (findEmail) {
      return res.status(400).json({ message: "Email already exists" });
    }
    if (findPhone) {
      return res.status(400).json({ message: "Phone number already exists" });
    }

    // Convert the password to a hash value by providing the string password and salt number.
    // console.log("restaurantName", restaurantName);
    // console.log("email", email);
    // console.log("phoneNo", phoneNo);
    // console.log("password", password);
    const hashPassword = await bcrypt.hash(password, 10);
    // console.log("hashPassword", hashPassword);

    // Create a new restaurant
    const response = new Usermodel({
      restaurantName,
      email,
      phoneNo,
      password: hashPassword,
    });

    if (response) {
      // create jwt token with userId and username
      await getjwtToken(response._id, res);
      await response.save();
      return res
        .status(200)
        .json({ message: "Restaurant created successfully" });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ userMessage: "User Failed!", message: error.message });
  }
};

// Login Restaurant
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Check if restaurant is present in the database
    const user = await Usermodel.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    // Compare the password against the password provided in  the request
    const validatePassword = await bcrypt.compare(password, user.password);

    if (!validatePassword) {
      return res.status(400).json({ error: "Invalid Password" });
    }

    await getjwtToken(user._id, res);

    res.status(200).json({
      message: "User Login Successful!",
      userId: user._id,
      restaurantName: user.restaurantName,
      email: user.email,
      phoneNo: user.phoneNo,
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

exports.logout = async (req, res) => {
  try {
    res.cookie("Token", "", { maxAge: 0 });
    res.status(200).json({ message: "User Logout Successful!" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
