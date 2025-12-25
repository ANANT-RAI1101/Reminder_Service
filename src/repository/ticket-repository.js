const { NotificationTicket } = require('../models/index');
const { Op } = require("sequelize");

class TicketRepository{

    async create(data){
        try {
            const response=await NotificationTicket.create(data);
            return response;
        } catch (error) {
            console.log("repository layer error")
            throw error;
        }
    }

    async get(filter){
        try {
           const response=await NotificationTicket.findAll({
            where:{
                status:filter.status,
                notificationTime:{
                    [Op.lte]:new Date()
                }
            }
           });
           return response;
        } catch (error) {
            console.log("repository layer error");
            throw error;
        }
    }

    async update(ticketId,data){
        try {
           const response= await NotificationTicket.update(data,{
            where:{
                id:ticketId
            }
        });
        return response; 
        } catch (error) {
            console.log("repository layer error");
            throw error;
        }
    }
}

module.exports= TicketRepository;