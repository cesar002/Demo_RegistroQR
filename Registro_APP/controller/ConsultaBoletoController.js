const mysql = require('mysql')


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
        let query = `SELECT r.nombre, r.apellido, r.ubicacion, r.email, b.idBoleto FROM boletos AS b INNER JOIN registrados AS r ON (b.idPersona = r.id) WHERE b.idBoleto = '${idBoleto}'`
        // let query = `SELECT * FROM boletos WHERE idBoleto = '4cavx28bcspvtpbtx5eq1k' `
        connection.query(query, (error, row) => {
            if (error){ reject(error); }
            else{
                resolve(row);
            } 
        })
    })
}


exports.buscarIDBoleto = function(req, res, next) {
    _buscarDatosPorID(req.params.idboleto).then( result => {
        res.json(result)
    }).catch(error => {
        console.log(error)
    })
}