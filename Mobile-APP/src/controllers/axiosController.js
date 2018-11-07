import { buscarRoute, verificarBoleto, buscarEmail, VER_VERIFICADOS} from '../utils/Variables';

import axios from 'axios';

const axiosController = (function(){
    return{
        buscarIDBoleto,
        confirmarBoleto,
        buscarPorEmail,
        verVerificados,
    };


    function buscarIDBoleto(idBoleto) {
        return new Promise((resolve, reject) => {
            axios.get(`${buscarRoute}/${idBoleto}`).then(res => {
                if(res.data.error){
                    reject(res.data);
                }else{
                    resolve(res.data)
                }
            }).catch(error => {
                reject(error)
            })
        });
    }

    function buscarPorEmail(email) {
        return new Promise((resolve, reject) => {
            axios.get(`${buscarEmail}/${email}`).then(res => {
                if(res.data.error){
                    reject(res.data)
                }else{
                    resolve(res.data);
                }
            }).catch(error => {
                reject(error);
            })
        })
    }

    function verVerificados(){
        return new Promise((resolve, reject) => {
            axios.get(VER_VERIFICADOS).then(res => {
                if(res.data.error){
                    reject(res.data.error)
                }else{
                    resolve(res.data);
                }
                
            }).catch(error => {
                reject(error);
            });
        })
    }


    function confirmarBoleto(idBoleto) {
        return new Promise((resolve, reject) => {
            axios.post(`${verificarBoleto}/${idBoleto}`).then(res => {
                if(res.data.error){
                    reject(res.data)
                }else{
                    resolve(res.data);
                }
            }).catch(error => {
                reject({response: res.data, error: error})
            })
        });
    }



})();

export default axiosController;