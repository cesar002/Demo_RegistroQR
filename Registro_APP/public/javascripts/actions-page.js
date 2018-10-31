var inputNombre
var inputApellido
var inputPais
var inputEmail

window.onload = function () {
    // document.getElementById() code here
    inputNombre = document.getElementById("nombre")
    inputApellido = document.getElementById("apellido")
    inputPais = document.getElementById("pais")
    inputEmail = document.getElementById("email")

}

// const actions_page = (function() {

//     return {
//         createPersona
//     };

const createPersona = function () {
        let nombre = inputNombre.value;
        let apellido = inputApellido.value;
        let pais = inputPais.value;
        let email = inputEmail.value
    
        let persona = {
            nombre: nombre,
            apellido: apellido,
            pais: pais,
            email: email,
        }
    
        axios_Actions.registrar(persona);
    
    }



// })()

// export default actions_page




// function registrar(persona){
//     axios.post('/registrarse',{
//         persona: persona
//     })
//     .then(response => {
//     console.log("correcto")
//     }).catch(error => {
//         console.log("error", error)
//     })
// }


