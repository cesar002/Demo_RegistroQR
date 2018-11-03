import {SET_CODE} from '../actions/LectorAction';

export default ( state = { }, action ) => {
    switch(action.type){
        case SET_CODE: 
            return{
                ...state,
                codigo: action.payload.codigo,
            }
        default:
            return state;
    }
}