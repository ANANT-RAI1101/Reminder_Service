const express=require('express');
const bodyParser=require("body-parser");
const{PORT}=require("./config/server-config");
const ApiRoute=require("./routes/index");
const job = require('./utils/jobs');
const {createChannel}=require("./utils/message-queue");
const setupAndRunServer=async()=>{
    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use("/api",ApiRoute);
    const channel=await createChannel();
    app.listen(PORT,async()=>{
        console.log(`server is running at port ${PORT}`);
        job();    
    })
}

setupAndRunServer();