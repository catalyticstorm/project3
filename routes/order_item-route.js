var db = require("../models");

module.exports = function(app) {

    app.put("/api/order_item", function(req, res) {
        db.Order_item.update(
            req.body, {
                where: {
                    id: req.body.id
                }
            }).then(function(dbService) {
            res.json(dbOrder_item;
        });
    });

    app.get("/api/order_item/:id", function(req, res) {

        db.Post.findOne({
            where: {
                id: req.params.id
            },
            include: [db.User]
        }).then(function(dbService) {
            res.json(dbService);
        });
    });
};

