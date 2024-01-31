const { model, Schema } = require('mongoose');

const userSchema = new Schema({
	role: {
		type: String,
		enum: ['admin', 'user'],
		default: 'user'
	},
	name: String,
	username: String,
	password: String
});

const User = model('User', userSchema);

module.exports = User;



// how does this get created
// need to make sure front end stays fresh
// const QR = {
// 	timestamp,
// 	users_that_scanned: [
// 		{
// 			user_id
// 			timestamp_when_scanned
// 		}
// 	]
// }
