exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex("instructions")
		.del()
		.then(function () {
			// Inserts seed entries
			return knex("instructions").insert([
				{
					instructionId: 1,
					recipeId: 1,
					stepNumber: 1,
					stepInfo: "Lorem ipsum dolor sit.",
				},
				{
					instructionId: 2,
					recipeId: 1,
					stepNumber: 1,
					stepInfo: "Lorem, ipsum dolor.",
				},
				{
					instructionId: 3,
					recipeId: 1,
					stepNumber: 2,
					stepInfo: "Lorem ipsum dolor sit amet consectetur adipisicing.",
				},
				{
					instructionId: 4,
					recipeId: 4,
					stepNumber: 1,
					stepInfo: "Lorem, ipsum dolor.",
				},
				{
					instructionId: 5,
					recipeId: 4,
					stepNumber: 2,
					stepInfo: "Lorem ipsum dolor sit amet.",
				},
				{
					instructionId: 6,
					recipeId: 4,
					stepNumber: 2,
					stepInfo:
						"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi?",
				},
			]);
		});
};
