// Imports
const express = require("express");
const bcrypt = require("bcryptjs");
const localStorage = require("local-storage");
const JWT_SECRET = process.env.JWT_SECRET;
const Usermodel = require("../../../models/userModel");
const getjwtToken = require("../../../utility/get-jwt");


// Register restaurant
exports.register = async (req, res) => {

  const {restaurantName,email,phoneNo,password,confirmPassword} = req.body;

  try {

  if(password !== confirmPassword){
    return res.status(400).json({ message: "Passwords do not match"});
  }

  const user  = await Usermodel.findOne({restaurantName});

  const findEmail  = await Usermodel.findOne({email});

  const findPhone  = await Usermodel.findOne({phoneNo});

  if(user){
    return res.status(400).json({ message: "Restaurant already exists"});
  }
  if(findEmail){
    return res.status(400).json({ message: "Email already exists"});
  }
  if(findPhone){
    return res.status(400).json({ message: "Phone number already exists"});
  }

  // Convert the password to a hash value by provideing string password and salt number.
  const hashPassword = await bcrypt.hash(password, 10);

  
    // Create a new restaurant
    const response = await Usermodel.create({
        restaurantName,
        email,
        phoneNo,
        password : hashPassword
    });
    if(response){
        //create jwt token with userId and username
        await getjwtToken(response._id,res);
        res.status(200).json({ message: "Restaurant created successfully"});
    }
  } catch (error) {
      return res.status(400).json({ userMessage:"User Failed!", message: error.message });
  }
};

// Login Restaurant
exports.login = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // Check if restaurant is present in the database
  const user = await Usermodel.findOne({ username }).lean();

  if (!user) {
    return res.json({ status: "error", error: "User not found" });
  }
  
  // Coverts the document from monogoDB document to plain javascript object to increase performance and reduce memory usage
  

  // Compare the password against the password provided in  the request
  if (await bcrypt.compare(password, user.password)) {
    // Create jwt token with userId and username
    const token = jwt.sign(
      {
        id: user._id,
        username: user.username,
      },
      JWT_SECRET,
      { expiresIn: "2h" }
    );
     console.log(token);
    // Store the token in the local storage for later use
    localStorage.set("jwt", token);

    // Render restaurant view
    res.redirect("/restaurant/restaurantHomePage");
  } else {
    res.json({ status: "error", error: "Invalid Password" });
  }
};


exports.logout = async(req,res) => {
  localStorage.remove("jwt");
  res.redirect("/restaurant/login");
}