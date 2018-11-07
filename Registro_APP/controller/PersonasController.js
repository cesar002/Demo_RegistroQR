//import mysql from 'mysql';
const mysql = require('mysql')

var FolioGenerador = require('./FolioGenerator')
var EmailController = require('./EmailController');
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

    
// function conectar() {
//     connection.connect((error) => {
//         if(error){
//             console.log("Error al conectar");
//             return
//         }
    
//         console.log("Conexion realizada");
//     })
// }

function insertarPersona(persona) {
    return new Promise((resolve, reject) => {
        _handleDisconnecter();

        let query = "INSERT INTO registrados SET ?"
        // console.log(persona)
        connection.query(query, persona, (err, res) => {
            if(err){
                reject("Error al insertar persona", err);
            }

            resolve("registrada con exito");
        })
    })
}

function insertarBoleto(email) {
    return new Promise((resolve, reject) => {
        let query = "SELECT MAX(id) AS idPersona FROM registrados"
        let id;
        let folioBoleto = FolioGenerador.generar()
        
        connection.query(query, (err, row) => {
            if(err){
                reject("Error al consultar: "+err)
            }

            if(!row) {
                reject("No se encontro ese ID")
            }

            row.map(item => {
                id = item.idPersona
            })

            connection.query('INSERT INTO boletos SET ?', {idBoleto: folioBoleto, idPersona: id}, (err, sucess) => {
                if(err){
                    reject("Error al insertar el boleto");
                }

                EmailController.sendMail({email: email,codigo: folioBoleto }).then( sucess => {
                    resolve();
                }).catch( error => {
                    reject();
                } )
            })
        })

    })
}

exports.insertar = function(req, res, next) {

    Promise.all([insertarPersona(req.body), insertarBoleto(req.body.email)]).then( sucess => {
        res.redirect('/registrarse')
    }).catch( error => {
        res.redirect('/registrarse')
    })
}

    




