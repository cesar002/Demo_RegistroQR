//import mysql from 'mysql';
var FolioGenerador = require('./FolioGenerator')
var EmailController = require('./EmailController');

const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'registroConvencion',
})

    
function conectar() {
    connection.connect((error) => {
        if(error){
            console.log("Error al conectar");
            return
        }
    
        console.log("Conexion realizada");
    })
}

function desconectar () {
    connection.end((error) => {
        console.log("desconectando:",error)
    })
}

function insertarPersona(persona) {
    return new Promise((resolve, reject) => {
        conectar();

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

                // resolve();
                EmailController.senEmail(email, folioBoleto).then(succes => {
                    resolve();
                }).catch(error => {
                    reject(error);
                })

                
            })
        })

    })
}

exports.insertar = function(req, res, next) {

    Promise.all([insertarPersona(req.body), insertarBoleto(req.body.email)]).then( sucess => {
        res.render('registro', {title: 'Registrarse'})
    }).catch( error => {
        res.render('registro', {title: 'Registrarse', error: error})
        console.log(error)
    })
}

    




