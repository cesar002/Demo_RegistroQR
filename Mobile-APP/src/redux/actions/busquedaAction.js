export const BUSQUEDA_STATE = 'BUSQUEDA_STATE';
export const SET_RESULTS = 'SET_RESULTS';

export const initBusqueda = (bState) => {
    return({
        type: BUSQUEDA_STATE,
        payload: {bState}
    });
}

export const setResults = (result) => {
    return({
        type: SET_RESULTS,
        payload: { result }
    });
}
