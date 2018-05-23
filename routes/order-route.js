var db = require("../models");

module.exports = function(app) {

    app.post("/orders", function(req, res) {
    	db.pOrder.create(req.body).then(function(dbpOrder) {
    		res.json(dbpOrder);
    	});
    });
};


