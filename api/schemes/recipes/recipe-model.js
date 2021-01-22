const db = require("../../../data/db-config");

// function findAll(table) {
// 	return db(table);
// }

const findAll = (table) => db(table);

const findByParam = (table, param) => db(table).where(param);

const findRecipeIngredients = (recipeId) => {
	return db("recipes as r") //from;
		.where({ "ri.recipeId": recipeId })
		.join("recipe_ingredients as ri", { "r.recipeId": "ri.recipeId" })
		.join("ingredients as i", { "ri.ingredientId": "i.ingredientId" })
		.select(
			"r.recipeId",
			"recipeName",
			"i.ingredientId",
			"i.name as ingredientName",
			"ri.quantity",
			"i.unitType"
		);
};

const findRecipeInstructions = (recipeId) => {
	return "instructions as i";
};

const findManyToManyByParam = (table, id, join1, join2, select) => {
	//make a new migration to get this working
	// normalize tablenames (figure out what to do with plurals)
	return db(table)
		.where({ [`${table}.${table}Id`]: id })
		.join(join1, { [`${join1}.${join1}Id`]: `${table}.${table}Id` })
		.join(join2, { [`${join2}.${join2}Id`]: `${join1}.${join1}Id` })
		.select(...select);
};

module.exports = {
	findAll,
	findByParam,
	findRecipeIngredients,
	findManyToManyByParam,
};
