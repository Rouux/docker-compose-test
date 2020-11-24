const mongoose = require("mongoose");

const {
	MONGO_URL,
	MONGO_INITDB_DATABASE,
	MONGO_INITDB_USERNAME,
	MONGO_INITDB_PASSWORD,
} = process.env;

const dbHost = `${MONGO_URL}/${MONGO_INITDB_DATABASE}?authSource=${MONGO_INITDB_DATABASE}`;

const connectWithRetry = () => {
	console.log("MongoDB connection with retry");
	mongoose
		.connect(dbHost, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			user: MONGO_INITDB_USERNAME,
			pass: MONGO_INITDB_PASSWORD,
		})
		.then(() => {
			console.log("MongoDB is connected");
		})
		.catch((err) => {
			console.log(err);
			console.log("MongoDB connection unsuccessful, retry after 5 seconds.");
			setTimeout(connectWithRetry, 2000);
		});
};

module.exports = {
	connectWithRetry,
};
