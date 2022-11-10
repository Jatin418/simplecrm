const jwt = require("jsonwebtoken");
const express = require("express");
const Authenticate = require("../middleware/authenticate")
// const globalService = require("../core/globalService");
const globalService = require("../core/service");

const router = express.Router();

require("../DbConnect/Conn")
const Account = require("../model/AccountSchema")

//  Account Patient Register

// router.post("/register",async(req,res)=>{
//   const {acname,type,owner,city,source,sector,pstcode,sic,state,country,revenue,phone,websit,emplye,addline} = req.body;
// console.log("Req.Body",req.body);
//   if(!acname || !type || !owner || !city || !source || !sector || !pstcode || !sic || !state || !country || !revenue || !phone || !websit || !emplye || !addline ){
//      return res.status(422).json({error:"plz fill the data"});
//   }

//   try {
      
//       const preuser = await Account.findOne({acname:req.acname});
//       console.log('USERS',preuser);

//       if(preuser){
//           res.status(422).json({error:"this user is already present"});
//       }else{
//           const adduser = new Account({
//             acname,type,owner,city,source,sector,pstcode,sic,state,country,revenue,phone,websit,emplye,addline
//           }); 
//            console.log('adduser data',adduser);
//          const sav = adduser.save();

//          console.log("Adduser",adduser);
//          sav.then((result) => console.log("response", result)).catch((e) => console.log("eee", e))
//         //  console.log("response",sav);
//         //  return res.status(200).json({message: 'User added Successfully'})
         
//       }

//   } catch (error) {
//     console.log("errrrrrrrrr@@@@@",error)
//       res.status(422).json(error);
//   }
// })


router.post("/register", async (req,res)=>{
  const {acname,type,owner,city,source,sector,pstcode,sic,state,country,revenue,phone,websit,emplye,addline}=req.body
  console.log("Body data",req.body);
    if (!acname,!type,!owner,!city,!source,!sector,!pstcode,!sic,!state,!country,!revenue,!phone,!websit,!emplye,!addline) {
      return res.status(400).json({error:"Plz Fill All the details"})
    }
   try{
    const UserExist = await Account.findOne({acname:acname}) 
   
   if (UserExist) {
     res.status(404).json({error:"user already exist"})
   }else {

    // This is from globalServices
    // const encyPwd = globalService.encryptString(password);
    

    // This is from Services 
    const user = new Account ({
      acname,type,owner,city,source,sector,pstcode,sic,state,country,revenue,phone,websit,emplye,addline
     })
  
     // Checck the data into db but first checks decrypt in userSchema.
      user.save()
     return res.status(200).json({message: 'Account Registered Successfully'})
    //  res.send("User Registered Succesfully")
    
   }
   
  }catch(err){
    console.log(err);
  }
  
})



// get userdata 

router.get("/getdatas",async(req,res)=>{
  try {
      const userdata = await Account.find();
      res.status(201).json(userdata)
      console.log('USERDATA',userdata);
  } catch (error) {
      res.status(422).json(error);
  }
})

// get individual user

router.get("/getuser/:id",async(req,res)=>{
  try {
      console.log(req.params);
      const {id} = req.params;

      const userindividual = await Account.findById({_id:id});
      console.log(userindividual);
      res.status(201).json(userindividual)

  } catch (error) {
      res.status(422).json(error);
  }
})


// update user data

router.patch("/updateuser/:id",async(req,res)=>{
  try {
      const {id} = req.params;

      const updateduser = await Account.findByIdAndUpdate(id,req.body,{
          new:true
      });

      console.log(updateduser);
      res.status(201).json(updateduser);

  } catch (error) {
      res.status(422).json(error);
  }
})


// delete user
router.delete("/deleteuser/:id",async(req,res)=>{
  try {
      const {id} = req.params;

      const deletuser = await Account.findByIdAndDelete({_id:id})
      console.log(deletuser);
      res.status(201).json(deletuser);

  } catch (error) {
      res.status(422).json(error);
  }
})



module.exports = router;