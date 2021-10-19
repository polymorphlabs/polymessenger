// Controller to call Hubtel API to send SMS.. We prefer to use a wrapper for this job
// https://www.npmjs.com/package/hubtel-sms-node
const dotenv = require("dotenv").load("../.env");
const boom = require("boom");
const SMSAgent = require("hubtel-sms-node")({
    clientId: process.env.HUBTEL_CLIENT_ID,
    clientSecret: process.env.HUBTEL_CLIENT_SECRET
});


module.exports.sendSMS = async (req, res) => {
    const { from, to, message } = req.body;
    // Creating message payload
    const payload = {
        from,
        to,
        message,
        registeredDelivery: true
    };

    try{
        await SMSAgent.sendSMS(payload);
        return {
            success: true,
            message: `SMS sent to ${message.to} was successful`,
        };
    }catch (err) {
        throw boom.boomify(err);
    }
};
