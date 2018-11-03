import {combineReducers} from 'redux';

import busquedaReducers from './Reducers/busquedaReducers';
import lectorReducer from './Reducers/LectorReducer';

export default combineReducers({
    lectorData: lectorReducer,
    busquedaData: busquedaReducers,
});