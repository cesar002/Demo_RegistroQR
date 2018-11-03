export const SET_CODE = 'SET_CODE';

export const setCode = (codigo) => {
    return({
        type: SET_CODE,
        payload: { codigo }
    });
}
