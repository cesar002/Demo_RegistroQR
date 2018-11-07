import { BUSQUEDA_STATE, SET_RESULTS} from '../actions/busquedaAction';

export default (state = {}, action) => {
    switch(action.type){
        case BUSQUEDA_STATE:
            return{
                ...state,
                busquedaState: action.payload.bState
            }
        case SET_RESULTS:
            return {
                ...state,
               result: action.payload.result
            }
        default:
            return state
    }
}