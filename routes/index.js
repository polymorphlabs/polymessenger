const smsController = require("../controllers/sms");
const smsSchema = require("../schema/sms");

module.exports =  [
    {
        method: "POST",
        url: "/api/v1/sms",
        handler: smsController.sendSMS,
        schema: smsSchema.sendSMSSchema
    }
];