import {combineReducers} from 'redux';

import busquedaReducers from './Reducers/busquedaReducers';
import lectorReducer from './Reducers/LectorReducer';
import emailReducer from './Reducers/emailReducer';
import verificadosReducer from './Reducers/verificadosReducer';

export default combineReducers({
    lectorData: lectorReducer,
    busquedaData: busquedaReducers,
    emailData: emailReducer,
    verificadosData: verificadosReducer,
});