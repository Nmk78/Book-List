///same as user model

const validator = require('validator')

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.registerUser = async function (email, password) {

  //checking everything is valid or not
  if(!email || !password){
    throw new Error("All fields are required")
  }
  if(!validator.isEmail(email)){
  throw new Error("Email is not valid")
  }
  if(!validator.isStrongPassword(password)){
    throw new Error("Password is not strong enough")
  } 

  const exists = await this.findOne({ email });

  if (exists) {
    throw new Error("Email already exists");
  }

  const saltRound = 10

  const salt = await bcrypt.genSalt(saltRound); //generate salt
  const hash = await bcrypt.hash(password, salt); //generate hash according to the user password by using salt

  const user = await this.create({ email, password: hash });
  return user;
};

userSchema.statics.loginUser = async function (email, password) {
    //checking everything is valid or not
    if(!email || !password){
      throw new Error("All fields are required")
    }
    const user = await this.findOne({ email })
    if (!user) {
      throw new Error("Email doesn't exists");
    }
  
    const PWS_match = await bcrypt.compare(password, user.password);

    if(!PWS_match){
      throw new Error("Incorrect password")
    }

    return user
  }



module.exports = mongoose.model("User", userSchema);
