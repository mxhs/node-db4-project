exports.up = function (knex) {
	return knex.schema.renameTable("recipe-ingredients", "recipe_ingredients");
};

exports.down = function (knex) {
	return knex.schema.dropTableIfExists("recipe_ingredients");
};
