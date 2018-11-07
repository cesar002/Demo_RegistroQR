export const SET_VERIFICADOS = 'SET_VERIFICADOS';

export const setVerificados = (verificados) =>{
    return {
        type: SET_VERIFICADOS,
        payload: { verificados }
    }
}