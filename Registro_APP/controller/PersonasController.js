//import mysql from 'mysql';
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
        console.log(persona)
        connection.query(query, persona, (err, res) => {
            if(err){
                // console.log("Error al insertar persona", err)
                reject("Error al insertar persona", err);
            }

            // console.log("registrada con exito")
            resolve("registrada con exito");

        })

    })
    
}

exports.insertar = function(req, res, next) {
    insertarPersona(req.body).then( resolve => {
        res.send("ok")
    }).catch(error => {
        res.send(":C")
    })
}

    




