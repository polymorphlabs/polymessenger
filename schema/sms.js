module.exports.sendSMSSchema = {
    body: {
        type: "object",
        properties: {
            from: { type: "string" },
            to: { type: "string" },
            message: { type: "string" }
        },
        required: ["from", "to", "message"]
    },
};
