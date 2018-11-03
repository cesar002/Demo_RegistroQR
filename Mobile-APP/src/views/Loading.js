import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';

import Logo from '../components/puros/loadingLogo';

export default class Loading extends Component {
    constructor(props){
        super(props);

        this._executeAction = this._executeAction.bind(this);
    }

    componentDidMount(){
        
    }

    _executeAction(){

    }


    render(){
        return(
            <View>
                <Logo type = 'bubbles' size = {25} color = '#0174DF' />
            </View>
        );
    }


}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});