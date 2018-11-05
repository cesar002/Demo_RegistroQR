import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { H1,H2,H3,H4, Text } from 'native-base';

import Boton from '../components/puros/Button';

import * as action from '../redux/actions/busquedaAction';
import axiosController from '../controllers/axiosController';

class DatosBuscados extends Component {

    constructor(props){
        super(props);

        this.navegar = this.navegar.bind(this);
    }

    navegar(){
        let {navigate} = this.props.navigation;

        navigate('LoadingConfirmar');
    }


    
    render(){
        return(
            <View style = {styles.container}>
                {/* esta parte debería ser dinamica */}
                <View style = {styles.txtBoleto}>
                        <H1>Boleto:</H1>
                        <H3>{this.props.result[0].idBoleto}</H3>
                </View>
                <View style = {styles.datos}>
                    <View style = {styles.datos_item}>
                        <H3>Nombre: </H3>
                        <Text>{this.props.result[0].nombre}</Text>
                    </View>
                    <View style = {styles.datos_item}>
                        <H3>Apellido: </H3>
                        <Text>{this.props.result[0].apellido}</Text>
                    </View>
                    <View style = {styles.datos_item}>
                        <H3>Pais: </H3>
                        <Text>{this.props.result[0].ubicacion}</Text>
                    </View>
                    <View style = {styles.datos_item}>
                        <H3>Email: </H3>
                        <Text>{this.props.result[0].email}</Text>
                    </View>
                </View>
                <View style = {styles.boton}>
                    <Boton text = 'Confirmar' color = '#2E9AFE'  action = {this.navegar} />
                </View>
            </View>
        );
    }
}


const mapStateToProps = state =>{
    return{
        result: state.busquedaData.result
    }
}

const mapDispatchToProps = dispatch =>{
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DatosBuscados);




const styles = StyleSheet.create({
    container:{
        flex: 8
    },
    txtBoleto: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    datos: {
        flex: 4,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    datos_item:{
        flex: 1,
        flexDirection: 'row',
        padding: 20,
    },
    boton:{
        flex:2,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30
    }
})