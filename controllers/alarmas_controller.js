var models = require('../models/models.js');

GET  /alarmas/show
exports.show= function(req, res){
 console.log("alarmas.ejs");
 res.render('alarmas');
};