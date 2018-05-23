var db = require('../models');

module.exports = function(app) {
	app.get('inventories', function(req, res) {

		db.Inventory.findAll({

		}).then(function(dbInventory) {
			res.json(dbInventory);
		});
	});

	app.post('inventories', function(req, res) {
		db.Inventory.
	})
};

