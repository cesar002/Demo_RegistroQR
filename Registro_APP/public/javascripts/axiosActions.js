import axios from 'axios';

const axios_Actions = (function(){

    return{
        registrar
    };


    function registrar(persona){
        axios.post('/registrarse',{
            persona: persona
        })
        .then(response => {
        console.log("correcto")
        }).catch(error => {
            console.log("error", error)
        })
}



})()

export default axios_Actions;