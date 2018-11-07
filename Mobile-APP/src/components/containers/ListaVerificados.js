import React, {Component} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {connect} from 'react-redux';

import ListaItem from '../puros/VerificadoItem';


class ListaVerificados extends Component {
    constructor(props){
        super(props);
    }

    _renderItems(){
        return this.props.verificados.map((item, key) => {
            return <ListaItem key = {key} idBoleto = {item.idBoleto} nombre = {item.nombre} apellido = {item.apellido}/>
        })
    }


    render(){
        return(
            <View style = {styles.container}>
                <ScrollView>
                    {this._renderItems()}
                </ScrollView>
            </View>
        );
    }


}



const styles = StyleSheet.create({
    container: {
        flex: 6
    }
});


const mapStateToProps = state =>{ 
    return {
        verificados: state.verificadosData.verificados
    }
}


export default connect(mapStateToProps)(ListaVerificados)