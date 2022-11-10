const mongoose = require("mongoose");


mongoose.connect(`mongodb+srv://SimpleCrmJat:Jatin2000@crmcluster.yxhu5jm.mongodb.net/?retryWrites=true&w=majority`,{
  useNewUrlParser:true,
  useUnifiedTopology: true
},()=>{
  console.log("My SimpleCrm DB is Connected");
})