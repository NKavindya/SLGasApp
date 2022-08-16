import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
StyleSheet,
Text,
View,
TextInput,
Button,
Image,
TouchableOpacity,
} from "react-native";

const MapScreen = ({navigation}) => {
        return (
            <View style={styles.container}>
                <StatusBar style="auto" />
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Search your Area"
                            placeholderTextColor="white"
                            onChangeText={(email) => setEmail(email)}
                        />
                    </View>
                    <Image source={{
                            width:330,
                            height:480,
                            marginBottom:20,
                            alignItems: 'center',
                            uri:"https://www.google.com/maps/d/thumbnail?mid=1aOI5Cmpp6WDhy10mDHCQPryi1Bw"
                    }}
                    />
            </View>
         );
    }
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "black",
            alignItems: "center",
        },
        inputView: {
            backgroundColor: "grey",
            opacity: 0.5,
            borderRadius: 15,
            width: "90%",
            height: 45,
            marginBottom: 20,
            marginTop: 20
        },
        TextInput: {
            height: 50,
            flex: 1,
            padding: 10,
            marginLeft: 30,
            fontSize: 15,
        },
    });
    
export default MapScreen;