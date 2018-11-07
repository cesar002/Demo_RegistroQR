import {SET_EMAIL} from '../actions/emailAction';

export default (state = {}, action) => {
    switch (action.type) {
        case SET_EMAIL:
            return{
                ...state,
                email: action.payload.email
            }
        default:
            return state;
    }
}