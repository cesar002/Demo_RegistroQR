export const BUSQUEDA_STATE = 'BUSQUEDA_STATE';
export const GET_RESULTS = 'GET_RESULTS';

export const initBusqueda = (bState) => {
    return({
        type: BUSQUEDA_STATE,
        payload: {bState}
    });
}

export const getResults = (result) => {
    return({
        type: GET_RESULTS,
        payload: { result }
    });
}