exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex("ingredients")
		.del()
		.then(function () {
			// Inserts seed entries
			return knex("ingredients").insert([
				{ ingredientId: 1, name: "Chicken Breast", unitType: "oz" },
				{ ingredientId: 2, name: "Salmon Filet", unitType: "oz" },
				{ ingredientId: 3, name: "Ground Beef", unitType: "oz" },
				{ ingredientId: 4, name: "Whole Turkey ", unitType: "lbs" },
				{ ingredientId: 5, name: "Broccoli", unitType: "oz" },
				{ ingredientId: 6, name: "Olive Oil", unitType: "tbsp" },
				{ ingredientId: 7, name: "Onion", unitType: "each" },
				{ ingredientId: 8, name: "Carrot", unitType: "oz" },
				{ ingredientId: 9, name: "Spaghetti", unitType: "oz" },
			]);
		});
};
