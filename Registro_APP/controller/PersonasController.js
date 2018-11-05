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

// const connection = mysql.createConnection({
//     host: 'us-cdbr-iron-east-01.cleardb.net',
//     user: 'b91699085c5b06',
//     password: 'b1778e37',
//     database: 'heroku_b8b282901e0c5f8',
// })
    
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

    




