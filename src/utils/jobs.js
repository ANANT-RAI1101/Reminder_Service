const cron = require("node-cron")
const emailService = require("../services/mail-service")

const sender = require("../config/email-config")

const setupJobs = () => {
    cron.schedule('*/2 * * * *', async () => {
        const response = await emailService.fetchPendingMail();
        response.foreach((email) => {
            sender.sendMail({
                
                to: email.recepientEmail,
                subject: email.subject,
                text: email.content
            },async(err,data)=>{
                if(err){
                    console.log(err); 
                }else{
                    console.log(data);
                    await emailService.update(email.id,{status:"SUCCESS"});
                }
            });
        });
        console.log(response);
    })
}

module.exports=setupJobs;