const mysql = require('mysql')
const currentTime = require('./currentTime');
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


function _buscarDatosPorID(idBoleto) {
    return new Promise((resolve, reject) => {
        _handleDisconnecter();
        let query = `SELECT r.id, r.nombre, r.apellido, r.ubicacion, r.email, b.idBoleto FROM boletos AS b INNER JOIN registrados AS r ON (b.idPersona = r.id) WHERE b.idBoleto = '${idBoleto}'`
        // let query = `SELECT * FROM boletos WHERE idBoleto = '4cavx28bcspvtpbtx5eq1k' `
        connection.query(query, (error, row) => {
            if (error){ reject({succes:false, error: error}); }
            else{
                if(row.length === 0){
                    reject({error: 'no hay datos'})
                }else{
                    resolve(row);
                }
            } 
        })
    })
}

function _verificarBoleto(idBoleto){
    return new Promise((resolve, reject) => {

        _buscarDatosPorID(idBoleto).then( result =>{
            let query = ` INSERT INTO verificados SET ? `

            connection.query(query, {idBoleto: idBoleto, fechaRegistro: currentTime.getCurrentTime() }, (err, succes) => {
                if (err) reject(err)
                else resolve('correcto')
            })
        }).catch(error =>{
            reject(error);
        });

    })
}

exports.verificarBoleto = function(req, res, next){
    _verificarBoleto(req.params.idboleto).then( result => {
        res.json({succes: true})
    }).catch(error =>{
        res.json({succes: false, error: error})
    })
}

exports.buscarIDBoleto = function(req, res, next) {
    _buscarDatosPorID(req.params.idboleto).then( result => {
        res.json(result)
    }).catch(error => {
        res.json({succes: false, error: error})
    })
}