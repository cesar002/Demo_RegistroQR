import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import {} from 'native-base';
import { connect } from 'react-redux';

import Logo from '../components/puros/loadingLogo';

import * as action from '../redux/actions/verificadosAction';
import axiosController from '../controllers/axiosController';

class LoadingVerificados extends Component {

    constructor(props){
        super(props);
        
    }

    componentDidMount(){
        axiosController.verVerificados().then(result => {
            this.props.setVerificados(result)
            this.props.navigation.navigate('Verificados');
        }).catch(error => {
            this.props.navigation.navigate('Main');
        })
    }


    render(){
        return(
            <View style = { styles.container }>
                <Logo titulo = 'Buscando...' color = '#2EFEC8' size = {30} type = 'pulse' />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});


const mapStateToProps = state => {
    return {
        verificados: state.verificadosData.verificados
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setVerificados(verificados){
            dispatch(action.setVerificados(verificados));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadingVerificados);