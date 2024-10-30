let mongoose = require("mongoose");
let dbURI = "mongodb://localhost:27017/Latihan_UUTS";

mongoose.connect (dbURI, {
    //useNewUrlParser:true
});

mongoose.connection.on ("connected", ()=>{
    console.log("connected to mongoose");
});

mongoose.connection.on ("error", (error)=>{
    console.log("connected error :" + error);
});

mongoose.connection.on ("disconect", ()=>{
    console.log("disconected from mongoose");
});
