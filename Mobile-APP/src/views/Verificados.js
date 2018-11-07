import React, { Component } from 'react';
import { StyleSheet, View} from 'react-native';
import { Button, Text } from 'native-base';
import Lista from '../components/containers/ListaVerificados';



export default class Verificados extends Component {
    constructor(props){
        super(props);

        this._navegar = this._navegar.bind(this);
    }

    _navegar(){
        this.props.navigation.navigate('Main') 
    }

    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.head} />
                    <Lista />
                <View style = {styles.footer}> 
                    <Button primary block  onPress = {() => {this._navegar()}}  >
                        <Text> Regresar </Text>
                    </Button>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container:{
        flex: 8
    },
    head:{
        flex: 1
    },
    footer:{
        flex: 1,
        paddingHorizontal: 20,
    },
    body: {
        flex: 6
    }
});