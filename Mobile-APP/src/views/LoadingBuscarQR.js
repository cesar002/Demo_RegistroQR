import React, {Component} from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { H2 } from 'native-base';
import { connect } from 'react-redux';

import Logo from '../components/puros/loadingLogo';

import axiosController from '../controllers/axiosController';
import * as action from '../redux/actions/busquedaAction';


class Loading extends Component {
    constructor(props){
        super(props);


        this.state = {
            loadingState: false,
        }
    }

    componentDidMount(){
        axiosController.buscarIDBoleto(this.props.codigo).then( r => {
            this.props.setResults(r)
            this.props.navigation.navigate('DatosBuscados')
        }).catch( error => {
            // console.warn(error)
            Alert.alert('Error en la busqueda');
            this.props.navigation.navigate('Lector')
        })
    }


    navegar(type){
        let {navigate} = this.props.navigation;

        switch(type){
            case 'succes':
                navigate('DatosBuscados')
                break;
            case 'error':
                Alert('No se encontraron esos datos')
                navigate('Lector')
                break;
            default:
                break;
        }
    }


    render(){
        return(
            <View style = {styles.container}>
                <Logo type = 'bubbles' size = {20} color = '#0174DF' titulo = 'Buscando...' />
            </View>
        );
    }


}

const mapStateToProps = state => {
    return{
        codigo: state.lectorData.codigo,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        setResults(result){
            dispatch(action.setResults(result))
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Loading)


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo: {
        textAlign: 'center'
    }
});