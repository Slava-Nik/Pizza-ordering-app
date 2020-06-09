const startServer = require("./app");
const databaseConnection = require("./data/connection");

databaseConnection()
	.then(() => startServer())
	.catch((err) => {
		console.error("An error occured while connection to mongodb", err);
		process.exit(1);
	});

