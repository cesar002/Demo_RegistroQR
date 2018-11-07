import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation';

//Lista de pantallas
import Main from '../views/Main';
import LectorQR from '../views/LeerQR';
import DatosBuscados from '../views/DatosBuscados';
import LoadingB from '../views/LoadingBuscarQR';
import LoadingConfirmar from '../views/LoadingConfirmar';
import BuscarEmail from '../views/BuscarEmail';
import LoadingBuscarEmail from '../views/LoadingBuscarEmail';
import LoadingVerificados from '../views/LoadingVerificados';
import Verificados from '../views/Verificados';

//////

const Navigation = createStackNavigator({
    // LoadingConfirmar: {screen: LoadingConf},
    Main: {screen: Main},
    Lector: {screen: LectorQR},
    LoadingBuscar: {screen: LoadingB},
    DatosBuscados: { screen: DatosBuscados },
    BuscarEmail: { screen:BuscarEmail },
    LoadingConfirmar: {screen: LoadingConfirmar},
    LoadingBuscarEmail: { screen: LoadingBuscarEmail },
    LoadingVerificados: { screen: LoadingVerificados },
    Verificados: { screen: Verificados },
    
    
},{
    navigationOptions:{
        header:null
    }
});


export default Navigation;