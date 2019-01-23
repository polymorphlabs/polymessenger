const dotenv = require("dotenv");
const boom = require("boom");

dotenv.load("../.env");

// Authenticate incoming requests
module.exports = async (request, reply, next) => {
    const authToken = request.headers.authorization;

    if(authToken !== process.env.SECURITY_KEY){
        return next(new Error(boom.unauthorized("Unauthorized token")))
    }else{
        next()
    }

    console.log(reply);
};