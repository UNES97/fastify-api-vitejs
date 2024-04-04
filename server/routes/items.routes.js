const {getItem, getItems, addItem, signIn} = require('../controllers/items.controller');
const { getItemsOpt, getItemOpt, postItemSchema, signinSchema } = require('../schemas/items.schema');
const { verifyToken } = require('../middlewares/auth');

module.exports = function (fastify, opts, done) {
    fastify.get('/items', {schema: getItemsOpt}, getItems)
    fastify.get('/items/:id', {schema: getItemOpt}, getItem)
    fastify.post('/items',{schema: postItemSchema, preHandler: [verifyToken]}, addItem)
    fastify.post('/signin',{schema: signinSchema}, signIn)
    done()
}

