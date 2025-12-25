const express=require("express")

const routes=express.Router();

const TicketController=require("../../controllers/ticket-controller")

routes.post("/create",TicketController.create);

module.exports=routes;