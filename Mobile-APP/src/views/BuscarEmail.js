import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import { H1, Form, Item, Label, Input } from 'native-base';
import {connect} from 'react-redux';

import Boton from '../components/puros/Button';

import * as action from '../redux/actions/emailAction';




class BuscarEmail extends Component {
    
    constructor(props){
        super(props);

        this._buscar = this._buscar.bind(this);

        this.state = {
            email: null
        }
    }

    _buscar(){
        this.props.setEmail(this.state.email);
        this.props.navigation.navigate('LoadingBuscarEmail');
    }


    render(){
        return(
            <View style = {styles.container}>
                <View style={styles.titulo}>
                    <H1 style = {styles.text}>Buscar por Email</H1>
                </View>
                <View style={styles.input}>
                    <Form>
                        <Item fixedLabel floatingLabel>
                            <Label>Email</Label>
                            <Input onChangeText = {text => { this.setState({email: text}) }} />
                        </Item>
                    </Form>
                </View>
                <View style={styles.botonArea}>
                    <Boton text='Buscar' color = '#5858FA' action = {()=>{ this._buscar() }} />
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 4,
    },
    titulo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input:{
        flex: 1,
        paddingHorizontal: 22,
    },
    botonArea:{
        flex: 2,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 22,
        
    },
    text:{
        color: '#5858FA',
        textAlign: 'center',
    }
});

const mapStateToProps = state =>{
    return {}
}

const mapDispatchToProps = dispatch => {
    return {
        setEmail(email){
            dispatch(action.setEmail(email));
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BuscarEmail)