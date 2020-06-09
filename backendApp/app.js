const path = require("path");
const express = require("express");
const cors = require("cors");
const env = process.env.NODE_ENV || "development";
const config = require("./config/config.json")[env];
const port = process.env.PORT || 5000;
const app = express();


app.use(express.static(path.join(__dirname, "public")));
app.use(cors(config.corsOptions));


// app.use('/', indexRouter);
// app.use('/api/v1/users', usersRouter);

module.exports = () => {
	app.listen(port, (err) => {
		if (err) {
			console.log("Something bad happened", err);
			process.exit(1);
		} else {
			console.log(`Server is launched on port ${port}`);
		}
	});
}


