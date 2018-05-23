var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var db = require('./models');
var PORT = (process.env.PORT || 8080);
var app = express();


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use("/", express.static(__dirname+"/public"));

db.sequelize.sync().then(function()
	{
	app.listen(PORT, () => {
		app.set("db", db)
		console.log('Example app listening on port '+PORT);
	});
});