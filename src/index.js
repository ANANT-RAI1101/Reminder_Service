const express=require('express');
const bodyParser=require("body-parser");
const{PORT}=require("./config/server-config");
const ApiRoute=require("./routes/index");
const {setupJobs,priorNoti} = require('./utils/jobs');
const {createChannel, subscribeMessage}=require("./utils/message-queue");
const { REMINDER_BINDING_KEY }  = require('./config/server-config');
const {subscribeEvent}=require("./services/mail-service")
const setupAndRunServer=async()=>{
    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use("/api",ApiRoute);
    const channel=await createChannel();
    subscribeMessage(channel,subscribeEvent,REMINDER_BINDING_KEY);
    app.listen(PORT,async()=>{
        console.log(`server is running at port ${PORT}`);
        setupJobs();
        priorNoti();   
    })
}

setupAndRunServer();