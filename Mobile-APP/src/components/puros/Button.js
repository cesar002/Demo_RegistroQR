import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Button, Text} from 'native-base';

export default class MyButton extends Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <Button style = {[{backgroundColor: this.props.color, paddingHorizontal: 20, justifyContent: 'center', alignItems: 'center' }]} block
            onPress = {() =>{ this.props.action() }} >
                <Text>{this.props.text}</Text>
            </Button>
        );
    }

}