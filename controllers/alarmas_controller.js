var models = require('../models/models.js');

//GET  /alarmas
exports.show= function(req, res){
 console.log("alarmas.ejs");
 res.render('alarmas');
};