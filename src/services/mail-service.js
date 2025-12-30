const sender = require("../config/email-config")
const TicketRepository = require("../repository/ticket-repository")

const ticketRepository = new TicketRepository();
const sendEmail = async (mailFrom, mailTo, mailSubject, mailBody) => {
    try {
        const response = await sender.sendMail({
            from: mailFrom,
            to: mailTo,
            subject: mailSubject,
            text: mailBody
        });
        console.log(response);

    } catch (error) {
        console.log("there is some error in mail service", error);

    }
}

const create = async (data) => {
    try {

        const response = await ticketRepository.create(data);
        return response;
    } catch (error) {
        console.log("service layer error");
        throw error;
    }
}

const subscribeEvent = async (payload) => {
    await create(payload);
}

const update = async (ticketId, data) => {
    try {
        const response = await ticketRepository.update(ticketId, data);
        return response;
    } catch (error) {
        console.log("service layer error");
        throw error;

    }
}

const fetchPendingMail = async () => {
    try {
        const response = await ticketRepository.get({ status: "PENDING" });
        return response;
    } catch (error) {
        console.log("service layer error");
        throw error;
    }
}

const fetchMail = async () => {
    try {
        const now = new Date();
        const twoHoursLater = new Date(now.getTime() + 2 * 60 * 60 * 1000);
        const response = await ticketRepository.fetchMail(twoHoursLater);
        return response;
    } catch (error) {
        console.log("service layer error");
        throw error;
    }
}

module.exports = {
    sendEmail,
    create,
    update,
    fetchPendingMail,
    subscribeEvent,
    fetchMail
}