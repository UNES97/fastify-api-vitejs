const jwt = require("jsonwebtoken");
require('dotenv').config()

const verifyToken = (req, reply, next) => {
    let token = req.headers["x-access-token"];
    console.log(token);
    if (!token) {
        reply.status(403).send({
            statusCode: 403,
            message: "Invalid TOKEN"
        });
    }
    else {
        jwt.verify(token, process.env.SECRECT_KEY, (err, decoded) => {
            if (err) {
                reply.status(401).send({
                    statusCode: 401,
                    message: "Invalid TOKEN"
                });
            }
            req.userId = decoded.id;
            req.userName = decoded.name;
            next();
        });
    }
}

module.exports = {
    verifyToken
}
