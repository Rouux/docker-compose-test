const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongodb = require("./src/services/mongodb");
mongodb.connectWithRetry();

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(allowCrossOrigin());

// app.use((req, _, next) => {
// 	req.headers.authorization = "authorized";
// 	console.log(`Going to : ${req.url}`);
// 	console.log(`headers.authorization : ${req.headers.authorization}`);
// 	next();
// });

const indexRouter = require("./src/routes/index");
const animalsRouter = require("./src/routes/animals");

app.use("/", indexRouter);
app.use("/animals", animalsRouter);

function allowCrossOrigin() {
	return (_, res, next) => {
		res.header("Access-Control-Allow-Origin", "*");
		res.header(
			"Access-Control-Allow-Headers",
			"Origin, X-Requested-With, Content-Type, Accept",
		);
		next();
	};
}

module.exports = app;
