import React, { Component } from 'react';
import { Picker, StyleSheet } from 'react-native';

export default class Operacao extends Component {
    constructor(props) {
        super(props);

        this.state = { operacao: '' }
    }
    render() {
        return(
            <Picker 
            styles={styles.operacao}
            selectedValue={this.state.operacao}
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