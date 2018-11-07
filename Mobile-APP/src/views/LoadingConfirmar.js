import React, {Component} from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Text, H1 } from 'native-base';
import { connect } from 'react-redux';


import Logo from '../components/puros/loadingLogo';
import Boton from '../components/puros/ButtonLarge';

import axiosController from '../controllers/axiosController';


class LoadingConfirmar extends Component {
    
    constructor(props){
        super(props);

        this.navegar = this.navegar.bind(this);

        this.state = {
            isReady: false,
            error: false,
        }
    }

    componentDidMount(){
        axiosController.confirmarBoleto(this.props.result[0].idBoleto).then(result => {
            this.setState({ isReady: true })
        }).catch(error => {
            this.setState({ isReady: true })
            this.setState({ error: true })
        })
    }


    navegar(){
        let {navigate} = this.props.navigation
        navigate('Main');
    }

    render(){

        if(!this.state.isReady){
            return <View style = {styles.loadingContainer}>
                        <Logo type = 'bars' size = {20} color = '#0174DF' titulo = 'Verificando...' />
                   </View>
            
        }

        if(this.state.error){
            return( 
            
                <View style = {styles.errorContainer}>
                    <View style = {styles.textSection}>
                        <H1 style = {styles.textError}>Ese boleto ya fue verificado</H1>
                    </View>
                    <View style = {styles.buttonSection}>
                        <Boton text = 'Regresar' color = '#2E9AFE'  action = {this.navegar} />
                    </View>
                    
                </View>
            )
        }

        return(
            <View style = {styles.successContainer}>
                <View style = {styles.textSection}>
                    <H1 style = {styles.text}>El boleto se ha confirmado con exito</H1>
                </View>
                <View style = {styles.buttonSection}>
                    <Boton text = 'OK' color = '#2E9AFE'  action = {this.navegar} />
                </View>
            </View>
        );
    }
}

const mapStateToProps = state =>{
    return {
        result: state.busquedaData.result
    }
}


export default connect(mapStateToProps)(LoadingConfirmar);


const styles = StyleSheet.create({
    loadingContainer:{
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    successContainer:{
        flex: 2,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: '#31B404'
    },
    errorContainer:{
        flex: 2,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: '#8A0808'
    },  
    textError:{
        color: '#FFFFFF'
    },
    textSection:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonSection:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    text:{
        color: '#FFFFFF',
        textAlign: 'center',
    }

});
