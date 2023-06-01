const { Schema, model } = require('mongoose');
const bcrypt = require("bcrypt")

const userSchema = new Schema({
  fname: { 
    type: String, 
    required: true 
  },

  lname: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true
  }
});

userSchema.method("verify", async function(pw){
  return await bcrypt.compare(pw, this.password)
})

// TODO: Add a Mongoose pre save hook to encrypt the password
userSchema.pre("save", async function(next){

})

const User = model('User', userSchema);
module.exports = User;
