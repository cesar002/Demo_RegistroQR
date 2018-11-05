import React, {Component} from 'react';
import {View} from 'react-native';

import LectorQR from '../components/containers/LectorQR'

export default class LeerQR extends Component {

    render(){
        return(
            
            <LectorQR navi={this.props.navigation} />
            
        )
    }

}