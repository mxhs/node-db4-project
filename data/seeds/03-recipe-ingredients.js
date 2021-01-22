exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex("recipe-ingredients")
		.del()
		.then(function () {
			// Inserts seed entries
			return knex("recipe-ingredients").insert([
				{ recipeIngredientsId: 1, recipeId: 1, ingredientId: 5, quantity: 4 },
				{ recipeIngredientsId: 2, recipeId: 1, ingredientId: 8, quantity: 4 },
				{ recipeIngredientsId: 3, recipeId: 1, ingredientId: 6, quantity: 2 },
				{ recipeIngredientsId: 4, recipeId: 4, ingredientId: 4, quantity: 5 },
				{ recipeIngredientsId: 5, recipeId: 4, ingredientId: 7, quantity: 3 },
				{ recipeIngredientsId: 6, recipeId: 4, ingredientId: 8, quantity: 2 },
			]);
		});
};
