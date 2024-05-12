const mongoose = require("mongoose");

const DB = "mongodb://127.0.0.1:27017/leave"; 

mongoose.connect(DB).then(()=>{
    console.log("Connected!!!");
}).catch((err)=>{
    console.log("Failed!!!");
});