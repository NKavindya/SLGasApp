import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
StyleSheet,
Text,
View,
TextInput,
Button,
TouchableOpacity,
} from "react-native";

const ResetPass = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.signUp}>Reset your Password</Text>
                </View>
                <StatusBar style="auto" />
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Username or Email"
                            placeholderTextColor="white"
                            onChangeText={(email) => setEmail(email)}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Enter New Password"
                            placeholderTextColor="white"
                            onChangeText={(email) => setEmail(email)}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Confirm New Password"
                            placeholderTextColor="white"
                            secureTextEntry={true}
                            onChangeText={(password) => setPassword(password)}
                        />
                    </View>
                    <View style={styles.loginBt}>
                        <Text style={styles.login} onPress={()=> navigation.navigate("Home")}>
                            Update
                        </Text>
                    </View>
            </View>
         );
    }
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "black",
            alignItems: "center",
            justifyContent: "center",
        },
        inputView: {
            backgroundColor: "grey",
            opacity: 0.5,
            borderRadius: 15,
            width: "80%",
            height: 45,
            marginBottom: 20,
        },
        TextInput: {
            height: 50,
            flex: 1,
            marginLeft: 20,
            fontSize: 15,
        },
        loginBt: {
            width: "30%",
            borderRadius: 25,
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
            backgroundColor: "orange",
            marginBottom: 40,
        },
        signUp: {
            color: 'orange',
            fontSize: 26,
            fontWeight: 'bold',
            paddingBottom:50,
            paddingRight: 50,
            marginTop: 10,
        },
        login: {
            color: 'black',
            fontSize: 18,
            fontWeight: 'bold',
            opacity: 0.6,
        },
    });

    export default ResetPass;