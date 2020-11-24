const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

// create mongoose schema
const animalSchema = new mongoose.Schema({
	name: String,
	image: String,
	description: String,
});

// create mongoose model
const Animal = mongoose.model("Animal", animalSchema, "animals");

// router.use((req, res, next) => {
// 	console.log(req.headers.authorization);
// 	next();
// });

router.get("/", function (_, res, _) {
	Animal.find({}, (err, animals) => {
		if (err) res.status(500).send(error);
		res.status(200).json(animals);
	});
});

router.post("/", (req, res) => {
	const animal = new Animal({
		name: req.body.name,
		image: req.body.image,
		description: req.body.description,
	});

	animal.save((error) => {
		if (error) res.status(500).send(error);

		res.status(201).json({
			message: "Animal created successfully",
		});
	});
});

module.exports = router;
