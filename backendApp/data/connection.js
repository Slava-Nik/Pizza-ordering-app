const mongoose = require("mongoose");
const env = process.env.NODE_ENV || "development";
const config = require("../config/config.json")[env];


module.exports = () =>
	mongoose
		.connect(config.database.url, config.database.connectOptions)
		.then(() => console.log("Mongodb connection is established"))
		.catch(() => {
			throw Error(`No database connection at "${config.database.url}"`);
		});
