import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import Logo from '../components/puros/loadingLogo';

import axiosController from '../controllers/axiosController';
import * as action from '../redux/actions/busquedaAction';

class LoadingBuscarEmail extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        axiosController.buscarPorEmail(this.props.email).then(result => {
            this.props.setResults(result);
            this.props.navigation.navigate('DatosBuscados');
        }).catch(error =>{
            this.props.navigation.navigate('BuscarEmail')
        })
    }



    render() {
        return(
            <View style = {styles.container}>
                <Logo type = 'double-bonce' size = {20} color = '#5858FA' titulo = 'Buscando...' />
            </View>
        );
    }

}

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


const mapStateToProps = state =>{
    return{
        email: state.emailData.email
    }
}

const mapDispatchToProps = dispatch => {
    return{
        setResults(result){
            dispatch(action.setResults(result))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadingBuscarEmail);
