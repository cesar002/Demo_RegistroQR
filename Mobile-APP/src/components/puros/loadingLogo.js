import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Bubbles, DoubleBounce, Bars, Pulse} from 'react-native-loader'


export default class LoadingLogo extends Component {

    constructor(props){
        super(props);

        this._logoLoading = this._logoLoading.bind(this);
    }

    _logoLoading(){
        switch(this.props.type){
            case 'bubbles':
                return <Bubbles size={this.props.size} color = {this.props.color} />
            case 'double-bonce':
                return <DoubleBounce size = {this.props.size} color = {this.props.color} />
            case 'bars':
                return <Bars size = {this.props.size} color = {this.props.color} />
            case 'pulse':
                return <Pulse size = {this.props.size} color = {this.props.color} />
            default:
                throw 'parametro Type invalido - Error LoadingLogo'
        }
    }

    render(){
        return(
            <View>
                {this._logoLoading()}
            </View>
        );
    }
}