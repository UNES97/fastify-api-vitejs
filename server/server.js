const fastify = require('fastify')({ logger: true })
const errorCodes = fastify.errorCodes
const cors = require('@fastify/cors');
const path = require('node:path');
const fastifyStatic = require('@fastify/static')


fastify.register(fastifyStatic, {
    root: path.join(__dirname, '..', 'client', 'app', 'dist'),
    prefix: '/app',
})
fastify.register(fastifyStatic, {
    root: path.join(__dirname, '..', 'client', 'dash'),
    prefix: '/dash',
    decorateReply: false
})

fastify.register(cors, { 
    origin: "*"
})
/* 
* Error Handling in Fastify
https://fastify.dev/docs/latest/Reference/Errors/ 
*/

fastify.get('/', function handler(request, reply) {
    reply.status(200).send({ message: 'MAXMIND TESTING' })
})

fastify.register(require('./routes/items.routes') , {prefix: 'api'})

fastify.listen({ port: 5000 }, (err) => {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
})