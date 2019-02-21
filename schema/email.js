module.exports.sendEmailSchema = {
    body: {
        type: "object",
        properties: {
            to: "email",
            title: "string",
            content: "string"
        },
        required: ["to", "title", "content"]
    }
};