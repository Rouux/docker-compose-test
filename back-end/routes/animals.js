var express = require("express");
var router = express.Router();

const animals = [
	{
		name: "Jean",
		image: "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg",
		description: "Lazy fat cat",
	},
	{
		name: "Marie",
		image: "https://thecatandthedog.com/wp-content/uploads/2020/11/GettyImages-1199242002-1-scaled-1.jpg",
		description: "Small young cat",
	},
	{
		name: "Sam",
		image: "https://media.ooreka.fr/public/image/3-306495-2497-full-13056057.jpg",
		description: "Big cloudy dog",
	},
	{
		name: "Max",
		image: "https://i.pinimg.com/originals/60/66/a6/6066a6fc7b8069b90ccfb44ee011d239.jpg",
		description: "Small young dog",
	},
];

router.use((req, res, next) => {
	console.log(req.headers.authorization);
	next();
});

/* GET users listing. */
router.get("/", function (req, res, next) {
	res.send(animals);
});

module.exports = router;
