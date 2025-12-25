const express=require("express")

const routes=express.Router();

const v1ApiRoute=require("./v1/index")

routes.use("/v1",v1ApiRoute);

module.exports=routes;