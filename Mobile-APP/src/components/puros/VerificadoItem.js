import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'native-base';


export default class VerificadoItem extends Component {
    constructor(props){
        super(props);
    }



    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.info}>
                    <View style = {styles.boleto}>
                        <Text style = { styles.size }>{this.props.idBoleto}</Text>
                    </View>
                    <View style = {styles.nombre}>
                        <Text style = { styles.fontSize }>{this.props.nombre}  {this.props.apellido}</Text>
                    </View>
                </View>
                <View style = {styles.fecha}>
                    <Text style = {styles.text}> {this.props.fecha} </Text>
                </View>
            </View>
        );
    }



}


const styles = StyleSheet.create({
    container:{
        flex: 3,
        flexDirection: 'row',
        borderBottomWidth: 0.7,
        borderBottomColor: '#BDBDBD',
        paddingHorizontal: 10,
    },
    info:{
        flex: 2,
        flexDirection: 'column'
    },
    boleto:{
        flex:1
    },
    nombre: {
        flex: 1
    },
    fecha:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        textAlign: 'center'
    },
    size:{
        fontSize: 11
    },
    nombreSize:{
        fontSize: 13
    }
});