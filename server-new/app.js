const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors()); 
const bcrypt = require("bcryptjs");


//for token , anykey
const jwt = require("jsonwebtoken");
var nodemailer = require("nodemailer");
const JWT_SECRET =
  "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";


app.listen(5000, () => {
    console.log("Server Started");
  });

const mongoUrl =
  "mongodb+srv://ashitasri0405:0405@candidateregis.utxunqx.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

  require("./userDetails");
  const User = mongoose.model("UserInfo");
  

  //creating a register api through which we can register a user
  app.post("/register", async (req, res) => {
    const { fname, lname, email, password, userType } = req.body;   //data from user
  
    const encryptedPassword = await bcrypt.hash(password, 10); //hashes the password
    try {
      const oldUser = await User.findOne({ email });
  
      if (oldUser) {
        return res.json({ error: "User Exists" });
      }
      await User.create({ 
        fname,           //uname(fromschema)=name(from body from user)
        lname,
        email,
        password: encryptedPassword,   //stores the hashed password
        userType,
      });
      res.send({ status: "ok" });      // after this send ok
    } catch (error) {
      res.send({ status: "error" });
    }
  });


  app.post("/login-user", async (req, res) => {
    const { email, password } = req.body;
  
    const user = await User.findOne({ email });       //Finding User by Email
    if (!user) {
      return res.json({ error: "User Not found" });
    }
    if (await bcrypt.compare(password, user.password)) {       // decrypt the passowrd first and then compare the passwords
      const token = jwt.sign({ email: user.email }, JWT_SECRET, {   // after comaprison generates a token
        expiresIn: "30m",
      });
  
      if (res.status(201)) {
        return res.json({ status: "ok", data: token });   //If the token is generated successfully, it returns a JSON response with a status of "ok" and includes the generated token in the data field.
      } else {
        return res.json({ error: "error" });
      }
    }
    res.json({ status: "error", error: "InvAlid Password" });
  });



  app.post("/userData", async (req, res) => {
    const { token } = req.body;
    try {
      const user = jwt.verify(token, JWT_SECRET, (err, res) => {    //verify token , if yes then all details saved in user
        if (err) {
          return "token expired";
        }
        return res;
      });
      console.log(user);
      if (user == "token expired") {
        return res.send({ status: "error", data: "token expired" });
      }
  
      const useremail = user.email;
      User.findOne({ email: useremail })
        .then((data) => {
          res.send({ status: "ok", data: data });
        })
        .catch((error) => {
          res.send({ status: "error", data: error });
        });
    } catch (error) { }
  });


  app.post("/deleteUser", async (req, res) => {
    const { userid } = req.body;
    try {
      UserModel.deleteOne({ _id: userid }, function (err, res) {
        console.log(err);
      });
      res.send({ status: "Ok", data: "Deleted" });
    } catch (error) {
      console.log(error);
    }
  });

  


  