const db = require("../../../data/db-config");

function findAll(table) {
	return db(table);
}

module.exports = { findAll };
