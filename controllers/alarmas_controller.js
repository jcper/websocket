var models = require('../models/models.js');

GET  /alarmas/show
exports.show= function(req, res){
 res.render('alarmas');
};