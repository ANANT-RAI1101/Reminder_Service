const { notificationticket } = require('../models/index');
const { Op } = require("sequelize");

class TicketRepository {

    async create(data) {
        try {

            const response = await notificationticket.create({
                subject: data.subject,
                content: data.content,
                recepientEmail: data.recepientEmail,
                status: data.status,
                notificationTime: data.notificationTime,
                departureTime: data.departureTime
            });
            return response;
        } catch (error) {
            console.log("repository layer error", error)
            throw error;
        }
    }

    async get(filter) {
        try {
            const response = await notificationticket.findAll({
                where: {
                    status: filter.status,
                    notificationTime: {
                        [Op.lte]: new Date()
                    }
                }
            });
            return response;
        } catch (error) {
            console.log("repository layer error");
            throw error;
        }
    }

    async update(ticketId, data) {
        try {
            const response = await notificationticket.update(data, {
                where: {
                    id: ticketId
                }
            });
            return response;
        } catch (error) {
            console.log("repository layer error");
            throw error;
        }
    }

    async fetchMail(time) {
        try {
            const response = await notificationticket.findAll({
                where: {
                    departureTime: {
                        [Op.lte]: time
                    }
                }
            })
            return response;
        } catch (error) {
            throw error
        }
    }
}

module.exports = TicketRepository;