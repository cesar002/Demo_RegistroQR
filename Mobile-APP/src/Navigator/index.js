import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation';

//Lista de pantallas
import Main from '../views/Main';
import LectorQR from '../views/LeerQR';
import DatosBuscados from '../views/DatosBuscados'
//////

const Navigation = createStackNavigator({
    Main: {screen: Main},
    Lector: {screen: LectorQR},
    DatosBuscados: { screen: DatosBuscados }
},{
    navigationOptions:{
        header:null
    }
});


export default Navigation;