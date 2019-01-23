const fastify = require("fastify");
const routes = require("./routes");
const swaggerOptions = require("./config/swagger");
const auth = require("./middlewares/auth");

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
        await server.listen(3000);
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


