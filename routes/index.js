var express = require('express');
var router = express.Router();

var  equiposController=require('../controllers/equipos_controller');
var  alarmasController=require('../controllers/alarmas_controller')

//Definicion de rutas de /quizes
router.get('/equipos/new',equiposController.new);
router.get('/equipos',equiposController.show);
router.post('/equipos/delete',equiposcontroller.delete);
router.get('/alarmas',alarmasController.show);

module.exports = router;