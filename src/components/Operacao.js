import React from 'react';
import { Picker, StyleSheet } from 'react-native';

export default props => (
    <Picker styles={styles.operacao}>
        <Picker.item label='Soma' value='soma' />
        <Picker.item label='Subtração' value='subtracao' />
    </Picker>
);

const styles = StyleSheet.create ({
    operacao: {
        marginTop: 15,
        marginBottom: 15
    }
})