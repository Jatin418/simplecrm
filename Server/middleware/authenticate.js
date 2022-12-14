const jwt = require("jsonwebtoken");
// const User = require("../model/userSchema");
const cookirParser = require("cookie-parser");


const Authenticate = async (req, res, next)=>{
 
try {

  const token = req.cookie.jwtoken;
  const verifyToken = jwt.verify(token,"mynameisjatinanjanefromharda" );

  const rootUser = await User.findOne({_id:verifyToken._id, "tokens.token":token});

  if (!rootUser) { throw new Error ("User Not Found")}

  req.token = token;
  req.rootUser = rootUser;
  req.userID = rootUser._id;
 
 next();
     
} catch (err) {
  res.status(401).send("Unauthorized : No token provided")
  console.log(err);
 }

}

module.exports = Authenticate;