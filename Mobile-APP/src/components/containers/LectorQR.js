import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';
import { connect } from 'react-redux';

import * as actions from '../../redux/actions/LectorAction';


class LectorQR extends Component {

    constructor(props){
        super(props)

        this.state = {
            permisoCamara: null,
        }
    }

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ permisoCamara: status === 'granted' });
    }

    _leerCodigo = ({ type, data }) => {
        if (data != this.props.codigo){
            this.props.setCode(data)
            console.warn(this.props);
            alert(`Codigo leido: ${data}`);
        }
        
    }

    render(){

        const { hasCameraPermission } = this.state;

        if (hasCameraPermission === null) {
            return <Text>persimos de camara requeridos</Text>;
        }
        if (hasCameraPermission === false) {
            return <Text>los permisos fueron denegados</Text>;
        }

        return(
            <View style={{ flex: 1 }}>
                <BarCodeScanner
                onBarCodeScanned={this._leerCodigo}
                style={StyleSheet.absoluteFill}
                />
            </View>
        );
    }
 

}

const mapStateToProps = state => {
    return {
        codigo: state.lectorData.codigo
    }
}


const mapDispatchToProps = dispatch =>{
    return{
        setCode(codigo){
            dispatch(actions.setCode(codigo));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LectorQR)
