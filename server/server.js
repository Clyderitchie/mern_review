const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const { typeDefs, resolvers } = require('./schemas');

const server = new ApolloServer({
	typeDefs, resolvers
});

const app = express();

const PORT = process.env.PORT || 3003;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require('./config/connection');
// const { User } = require('./models');

// User.create({
// 	role: 'admin',
// 	name: 'Diarmuid Murphy',
// 	username: 'd_murphy',
// 	password: '123123123'
// }).then(dbRes => console.log(dbRes));

const startApolloServer = async () => {
	await server.start();

	app.use('/graphql', expressMiddleware(server));

	db.once('open', () => {
		app.listen(PORT, () => {
			console.log(`Server running at http://localhost:${PORT}/`);
			console.log(`GraphQL API running at http://localhost:${PORT}/graphql`);
		});
	});
}

startApolloServer();