const getItemsOpt = {
    response: {
        200: {
            type: 'object',
            properties: {
                statusCode: { type: 'integer' },
                data: { type: 'array' },
            },
            required: ['statusCode', 'data'],
        }
    }
}
const getItemOpt = {
    response: {
        200: {
            type: 'object',
            properties: {
                statusCode: { type: 'integer' },
                data: {
                    type: 'object',
                    properties: {
                        id: { type: 'integer' },
                        name: { type: 'string' },
                        age: { type: 'integer' }
                    },
                }
            },
            required: ['statusCode', 'data']
        }
    }
};
const postItemSchema = {
    body: {
        type: 'object',
        properties: {
            name: { type: 'string' },
            age: { type: 'integer' }
        },
        required: ['name', 'age']
    }
}
const signinSchema = {
    body: {
        type: 'object',
        properties: {
            name: { type: 'string' },
        },
        required: ['name']
    }
}

module.exports = {
    getItemsOpt, getItemOpt, postItemSchema, signinSchema
}