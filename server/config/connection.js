const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/qr_scanner_db');

module.exports = mongoose.connection;