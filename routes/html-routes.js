var db = require('../models');

module.exports = function(app) {
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, '../views/index.js'));
	});

	app.get('/signUp', function(req, res) {
		res.sendFile(path.join(__dirname, '/views/signUp.js'));
	});
	app.get('/signIn', function(req, res) {
		res.sendFile(path.join(__dirname, '/views/signIn.js'));
	});

	app.get('/inventory', function(req, res) {
		res.sendFile(path.join(__dirname, '/views/inventory.js'));
	});

	app.get('/order', function(req, res) {
		res.sendFile(path.join(__dirname, '/views/order.js'));
	});

};