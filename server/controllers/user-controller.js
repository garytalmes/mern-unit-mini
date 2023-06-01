const { User } = require('../models');
const jwt = require("jsonwebtoken");
require("dotenv").config()

// FYI: The user's password is encrypted at the model level

module.exports = {
  
  async createUser({ body }, res) {
    try{
      const user = await User.create(body);
      const { password, ...modifiedUser } = user;

      const token = jwt.sign({
        email: user.email,
        id: user._id
      }, process.env.JWT_SECRET)
  
      res.cookie("auth-cookie", token).json({ status: "success", payload: modifiedUser })
    } catch(err){
      return res.status(400).json({ status: "error", msg: `Error creating user: ${err.message}` });
    }
  },


  async authUser({ body }, res) {
    let user
    try {
      user = await User.findOne({ email: body.email});
    } catch(err){
      return res.status(400).json({ message: 'Unable to authenticate user' });
    }
    if (!user) return res.status(400).json({ message: 'Unable to authenticate user' });

    /*
      TODO: verify the user by calling the instance method set up on the user model
      If not verified, send a 401 status back
      If verified, issue a new token and send back a new cookie w/ the response
        ((see the create method above))
    */
  },


  async verifyUser(req, res){
    const cookie = req.cookies["auth-cookie"]
    if( !cookie ) return res.status(401).json({msg: "un-authorized"})

    /*
      TODO: Use JWT to verify and decrypt the cookie; lookup the user, and send back 
          return res.status(200).json({ status: "success", payload: user }) 
      If the user is verified
    */
  }

};
