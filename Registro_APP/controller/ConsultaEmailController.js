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


function  _buscarPorEmail(email){
    return new Promise((resolve, reject) => {
        _handleDisconnecter();

        let query = `SELECT r.id, r.nombre, r.apellido, r.ubicacion, r.email, b.idBoleto FROM boletos AS b INNER JOIN registrados AS r ON (b.idPersona = r.id) WHERE r.email = '${email}'`

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


exports.buscarPorEmail = function(req,res,next) {
    _buscarPorEmail(req.params.email).then(result =>{
        res.json(result);
    }).catch(error => {
        res.json({succes: false, error: error})
    })
}