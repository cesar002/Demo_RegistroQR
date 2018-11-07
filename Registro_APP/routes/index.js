var JSON = require ('circular-json');
var bodyParser = require("body-parser");

var express = require('express');
var router = express.Router();

var DB = require('../controller/PersonasController');
var ConsultaB = require('../controller/ConsultaBoletoController');
var ConsultaE = require('../controller/ConsultaEmailController');
var ConsultaV = require('../controller/ConsultaVerificadosController');

router.use(bodyParser.urlencoded({ extended: false }));



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/registrarse', (req,res,next) => {
  res.render('registro', {title: 'Registrarse'})
});

router.get('/buscar/:idboleto', ConsultaB.buscarIDBoleto )

router.get('/buscarEmail/:email', ConsultaE.buscarPorEmail )

router.get('/verificados', ConsultaV.getVerificados )

router.post('/registrar', DB.insertar)

router.post('/verificar/:idboleto', ConsultaB.verificarBoleto );

// router.get('/registros/:idboleto', (req, res, next) => {
//   res.send(req.params.idboleto)
//   res.json()
// })



module.exports = router;
