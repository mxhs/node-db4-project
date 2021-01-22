exports.up = function (knex) {
	return knex.schema
		.createTable("recipes", (t) => {
			t.increments("recipeId");
			t.string("recipeName", 128).notNullable();
		})

		.createTable("ingredients", (t) => {
			t.increments("ingredientId");
			t.string("name", 128).unique().notNullable();
			t.string("unitType", 32);
		})

		.createTable("recipe-ingredients", (t) => {
			t.increments("recipeIngredientsId");
			t.integer("recipeId")
				.unsigned()
				.notNullable()
				.references("recipeId")
				.inTable("recipes")
				.onDelete("SET NULL")
				.onUpdate("CASCADE");
			t.integer("ingredientId")
				.unsigned()
				.notNullable()
				.references("ingredientId")
				.inTable("ingredients")
				.onDelete("SET NULL")
				.onUpdate("CASCADE");
			t.integer("quantity");
		})

		.createTable("instructions", (t) => {
			t.increments("instructionId");
			t.integer("recipeId")
				.unsigned()
				.notNullable()
				.references("recipeId")
				.inTable("recipes")
				.onDelete("SET NULL")
				.onUpdate("CASCADE");
			t.integer("stepNumber");
			t.string("stepInfo");
		});
};

exports.down = function (knex) {
	return knex.schema
		.dropTableIfExists("intructions")
		.dropTableIfExists("recipe-ingredients")
		.dropTableIfExists("ingredients")
		.dropTableIfExists("recipes");
};
