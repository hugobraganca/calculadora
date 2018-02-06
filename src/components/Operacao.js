import React, { Component } from 'react';
import { Picker, StyleSheet } from 'react-native';

export default class Operacao extends Component {

    render() {
        return(
            <Picker 
            styles={styles.operacao}
            selectedValue={this.props.operacao}
            onValueChange={op => {this.setState({operacao: op}); }}
            >
                <Picker.item label='Soma' value='soma' />
                <Picker.item label='Subtração' value='subtracao' />
            </Picker>
        );
    }
}

const styles = StyleSheet.create ({
    operacao: {
        marginTop: 15,
        marginBottom: 15
    }
})