const express = require("express");
const Recipes = require("./recipe-model");
const router = express.Router();

router.get("/", async (req, res, next) => {
	try {
		const recipes = await Recipes.findAll("recipes");
		res.status(200).json(recipes);
	} catch (err) {
		next(err);
	}
});

router.get("/:id/ingredients", async (req, res, next) => {
	try {
		const recipeIngredients = await Recipes.findRecipeIngredients(
			req.params.id
		);
		res.status(200).json(recipeIngredients);
	} catch (err) {
		next(err);
	}
});

router.get("/:id/instructions", async (req, res, next) => {
	try {
		const recipeId = req.params.id;
		const recipeName = await Recipes.findByParam("recipes", { recipeId });
		const recipeInstructions = await Recipes.findByParam("instructions", {
			recipeId,
		});
		console.log(recipeName);
		res.status(200).json({ [recipeName[0].recipeName]: recipeInstructions });
	} catch (err) {
		next(err);
	}
});

router.use((err, req, res, next) => {
	res.status(500).json({ message: err.message, stack: err.stack });
});

module.exports = router;
