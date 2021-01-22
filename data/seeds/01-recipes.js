exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex("recipes")
		.del()
		.then(function () {
			// Inserts seed entries
			return knex("recipes").insert([
				{ recipeId: 1, recipeName: "Veggie Stir Fry" },
				{ recipeId: 2, recipeName: "Pasta with Meatballs" },
				{ recipeId: 3, recipeName: "Roasted Salmon with Broccoli" },
				{ recipeId: 4, recipeName: "Roast Thanksgiving Turkey" },
				{ recipeId: 5, recipeName: "Chicken Parmesan" },
			]);
		});
};
