const jwt = require('jsonwebtoken');
const tokenSecret = process.env.SECERT || 'fdfvdfv';

module.exports = {
    signToken: ({ _id, name, username, role }) => {
        return jwt.sign({ _id, name, username, role }, tokenSecret, { expiresIn: '7days' })
    }
}