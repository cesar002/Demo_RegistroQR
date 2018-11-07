import { SET_VERIFICADOS } from '../actions/verificadosAction';

export default (state = {}, action) => {
    switch (action.type) {
        case SET_VERIFICADOS:
            return{
                ...state,
                verificados: action.payload.verificados
            }
        default:
            return state
    }
}