const TicketService = require('../services/mail-service');

const create=async(req,res)=>{
    try {
        const response = await TicketService.create(req.body);
        return res.status(200).json({
            data:response,
            err:{},
            message:"Successfully registered an email reminder",
            success:true
        })
    } catch (error) {
        return res.status(500).json({
            data:{},
            err:error,
            message:"not able registered an email reminder",
            success:false
        })
    }
}

module.exports={
    create
}