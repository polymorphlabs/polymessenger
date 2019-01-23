const fastify = require("fastify");
const dotenv = require("dotenv");
const routes = require("./routes");
const swaggerOptions = require("./config/swagger");
const auth = require("./middlewares/auth");


dotenv.load();


const server = fastify({
    logger: true
});

// Register Swagger
server.register(require("fastify-swagger"), swaggerOptions);

server.use(auth);


// Setting routes
routes.forEach(route => {
    server.route(route)
});

// Run the server
const start = async () => {
    try{
        await server.listen(process.env.PORT);
        server.swagger();
        console.log("Server starting");
    }catch(err){
        server.log.error(err);
        process.exit(1)
    }
};

(async function() {
    await start();
})();


