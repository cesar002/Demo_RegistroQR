import { BUSQUEDA_STATE, GET_RESULTS } from '../actions/busquedaAction';

export default (state = {}, action) => {
    switch(action.type){
        case BUSQUEDA_STATE:
            return{
                ...state,
                busquedaState: action.payload.bState
            }
        case GET_RESULTS:
            return {
                ...state,
               result: action.payload.result
            }
        default:
            return state
    }
}