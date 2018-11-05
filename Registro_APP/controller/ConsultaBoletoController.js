const mysql = require('mysql')
const currentTime = require('./currentTime');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'registroConvencion',
})


function _conectar() {
    connection.connect((error) => {
        if(error){
            console.log("Error al conectar");
            return
        }
    
        console.log("Conexion realizada");
    })
}

function _desconectar () {
    connection.end((error) => {
        console.log("desconectando:",error)
    })
}

function _buscarDatosPorID(idBoleto) {
    return new Promise((resolve, reject) => {
        _conectar();
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
        _conectar();

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