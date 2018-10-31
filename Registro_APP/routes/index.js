var JSON = require ('circular-json');
var bodyParser = require("body-parser");

var express = require('express');
var router = express.Router();

var DB = require('../controller/PersonasController');

router.use(bodyParser.urlencoded({ extended: false }));



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/registrarse', (req,res,next) => {
  res.render('registro', {title: 'Registrarse'})
});

router.post('/registrar', DB.insertar)



module.exports = router;
