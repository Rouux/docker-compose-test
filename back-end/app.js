var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var animalsRouter = require("./routes/animals");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// Cross Origin middleware
app.use((_, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept",
	);
	next();
});

app.use((req, _, next) => {
	req.headers.authorization = "authorized";
	console.log(`Going to : ${req.url}`);
	console.log(`headers.authorization : ${req.headers.authorization}`);
	next();
});

app.use("/", indexRouter);
app.use("/animals", animalsRouter);

module.exports = app;
