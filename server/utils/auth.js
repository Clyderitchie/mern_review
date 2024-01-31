const jwt = require('jsonwebtoken');
const tokenSecret = process.env.SECERT || 'fdfvdfv';

module.exports = {
    authMiddleware: ({ req }) => {
        const token = req.headers.authorization.split(' ').pop().trim();

        if(!token) {
            return req;
        }

        try {
            const { _id, name, username } = jwt.verify(token, tokenSecret, { maxAge: '7days' });
            req.user = { _id, name, username };
        } catch (error) {
            console.error('Invalid token!')
        }

        return req;
    },


    signToken: ({ _id, name, username, role }) => {
        return jwt.sign({ _id, name, username, role }, tokenSecret, { expiresIn: '7days' })
    }
}