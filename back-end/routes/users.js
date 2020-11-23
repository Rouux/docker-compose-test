var express = require("express");
var router = express.Router();

const users = [
	{
		name: "Jean",
	},
	{
		name: "Marie",
	},
];

router.use((req, res, next) => {
	console.log("/users");
	console.log(req.headers.authorization);
	next();
});

/* GET users listing. */
router.get("/", function (req, res, next) {
	res.send(users);
});

module.exports = router;
