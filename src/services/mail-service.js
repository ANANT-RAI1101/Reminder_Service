const sender = require("../config/email-config")

const sendEmail = async (mailFrom, mailTo, mailSubject, mailBody) => {
    try {
        const reaponse = await sender.sendMail({
            from: mailFrom,
            to: mailTo,
            subject: mailSubject,
            text: mailBody
        });
        console.log(response);
        
    } catch (error) {
        console.log("there is some error in ail service", error);
        
    }
}

module.exports={
    sendEmail
}