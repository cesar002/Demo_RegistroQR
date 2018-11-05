import { buscarRoute, verificarBoleto } from '../utils/Variables';

import axios from 'axios';

const axiosController = (function(){
    return{
        buscarIDBoleto,
        confirmarBoleto,
    };


    function buscarIDBoleto(idBoleto) {
        return new Promise((resolve, reject) => {
            axios.get(`${buscarRoute}/${idBoleto}`).then(res => {
                resolve(res.data)
            }).catch(error => {
                reject(error)
            })
        });
    }


    function confirmarBoleto(idBoleto) {
        return new Promise((resolve, reject) => {
            axios.post(`${verificarBoleto}/${idBoleto}`).then(res => {
                resolve(res.data);
            }).catch(error => {
                reject(res.data)
            })
        });
    }


})();

export default axiosController;