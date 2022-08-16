import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.Test}>Your Search is now available in your area
- find new update</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    Test:{
        color:'white',
        fontSize: 17,
        marginTop: 100,
        marginLeft: 30,
        marginRight: 20
    }
    });