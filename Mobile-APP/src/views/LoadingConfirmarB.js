import React, {Component} from 'react';
import {StyleSheet,View, Alert} from 'react-native';
import {connect} from 'react-redux'
import {H2, Text} from 'native-base'


import Logo from '../components/puros/loadingLogo';
import Boton from '../components/puros/ButtonLarge';

import axiosController from '../controllers/axiosController';
import * as action from '../redux/actions/busquedaAction';


class LoadingConfirmarB extends Component{
    constructor(props){
        super(props);

        this._navegarSucces = this._navegarSucces.bind();
        this._navegarError = this._navegarError.bind();

        this.state = {
            isReady: false,
          }
    }

    componentDidMount(){
        axiosController.confirmarBoleto(this.props.result[0].idBoleto).then(result => {
            this.setState({isReady: true});
        }).catch(error => {
            Alert.alert('No se puedo confirmar ese boleto');
            this._navegar('error')
        })
    }

    _navegarSucces(){
        // let {navigate} = this.props.navigation;
        // navigate('Main')
        console.warn(this.props.navigation)
    }

    _navegarError(){
        let {navigate} = this.props.navigation;
        navigate('DatosBuscados')
    }



    render(){
        if(!this.state.isReady){
            return(
                <View style = {styles.container}>
                    <Logo type = 'bubbles' size = {20} color = '#0174DF' titulo = 'Verificando...' />
                </View>
            )
        }

        return(
            <View style = {styles.containerSucces}>
                 <View style = {styles.descriptionSuccess}> 
                     <H2 style = {styles.textConfirm}>El boleto se ha confirmado con exito</H2> 
                </View>
                 <View style = {styles.buttonArea}>
                    <Boton text = 'OK' color = '#2E9AFE'  action = {this._navegarSucces} />
                 </View>
            </View>

        )
    }

    // componentDidMount(){
    //     // axiosController.confirmarBoleto(this.props.result[0].idBoleto).then(result =>{
    //     //     if(result){
    //     //         this.setState({
    //     //             status: true
    //     //         })
    //     //     }
    //     // }).catch(error => {
    //     //     Alert.alert('no se pudo confirmar el boleto');
    //     //     this._navegar('error')
    //     // })
    // }

    // _navegar(type){
    //     let {navigate} = this.props.navigation;

    //     switch(type){
    //         case 'succes':
    //             navigate('Main')
    //             break;
    //         case 'error':
    //             navigate('DatosBuscados');
    //             break;
    //         default:
    //             break;
    //     }

    // }


    // render(){

    //     if (this.state.status){
    //         return <View style = {styles.container}>
    //                  <Logo type = 'bubbles' size = {20} color = '#0174DF' titulo = 'Verificando...' />
    //                </View>
    //     }

    //     return(
    //         <View style = {styles.containerSucces}>
    //             <View style={{ flex:1, justifyContent:'Center', alignItems: 'center' }}> <H3>El boleto se ha confirmado con exito</H3> </View>
    //             <View style = {{flex:1, justifyContent:'flex-start', alignItems:'center'}}>
    //                 <MyButton text = 'OK' color = '#2E9AFE'  action = {() => { this._navegar('succes') }} />
    //             </View>
    //         </View>
    //     )
    // }

}

const styles = StyleSheet.create({
    container:{
        flex: 2,
        justifyContent: 'center',
        alignItems: "center"
    },
    containerSucces:{
        flex: 2,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: '#31B404'
    },
    descriptionSuccess:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonArea:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    textConfirm: {
        color: '#FFFFFF',
        textAlign: 'center',
    }
})


const mapStateToProps = state =>{
    return{
        result: state.busquedaData.result
    }
}

const mapDispatchToProps = dispatch => {
    return{

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoadingConfirmarB)