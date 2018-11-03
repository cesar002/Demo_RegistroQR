import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Button from '../components/puros/Button';


export default class Main extends Component {

    constructor(props){
        super(props);

        this._navegarBusqueda = this._navegarBusqueda.bind(this);
        this._navegarLector = this._navegarLector.bind(this);
    }

    _navegarLector() {
        let {navigate} = this.props.navigation
        navigate('Lector');
    }

    _navegarBusqueda() {

    }
    

    render(){
        return(
            <View style = {style.container}>
                <View style = {style.leerQR}>
                    <Button color = '#58ACFA' text = 'Leer QR' action = {this._navegarLector} />
                </View>
                <View style = {style.buscar}>
                    <Button color = '#58ACFA' text = 'Buscar por Email' action = {()=>{}} />
                </View>
            </View>
        );
    }

}

const style = StyleSheet.create({
    container:{
        flex: 2
    },
    leerQR:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,

    },
    buscar:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 20,
    }
})


