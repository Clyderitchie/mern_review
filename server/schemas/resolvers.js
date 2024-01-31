const { User, QRCode } = require('../models');

module.exports = {
	Mutation: {
		createUser: async (parent, args) => {
			try {
				return await User.create(args);
			} catch (error) {
				console.error(error);
				throw new Error(error);
			}
		},
		createQRCode: async (parent, args) => {
			try {
				// return await QRCode.create();
				const qrCode = new QRCode();
				return await qrCode.save();
			} catch (error) {
				console.error(error);
				throw new Error(error);
			}
		}
	},
	Query: {
		getQRCode: async (parent, args) => {
			try {
				return await QRCode.findById(args.id);
			} catch (error) {
				console.error(error);
				throw new Error(error);
			}
		},
	}
};