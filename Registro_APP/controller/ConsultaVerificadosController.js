const mysql = require('mysql')
const config = require('../Config');

var connection;



function _handleDisconnecter(){
    connection = mysql.createConnection(config.databaseConfig)

    connection.connect(function(error){
        if(error){
            console.log('error db: ',error);

            setTimeout(_handleDisconnecter, 2000);
        }
    });


    connection.on('error', function(err){
        console.log('db error: ',err);

        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            _handleDisconnecter();
        }else{
            _handleDisconnecter();
        }
    });

}


function _getVerificados(){
    return new Promise((resolve, reject) => {
        _handleDisconnecter();

        let query = 'SELECT r.nombre, r.apellido, r.ubicacion, r.email, b.idBoleto, v.fechaRegistro FROM verificados AS v INNER JOIN boletos AS b ON (b.idBoleto = v.idBoleto) INNER JOIN registrados AS r ON (r.id = b.idPersona)';

        connection.query(query, (error, rows) => {
            if(error){
                reject({ succes:false, error: error});
            }else{
                resolve(rows);
            }
        })

    })
}


exports.getVerificados = function(req, res, next) {
    _getVerificados().then(result => {
        res.json(result);
    }).catch(error => {
        res.json(error)
    })
}