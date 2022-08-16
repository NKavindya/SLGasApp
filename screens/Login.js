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

const Login = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.signUp}>Welcome back !</Text>
                    <Text style={styles.signUpapp}>SLGasApp</Text>
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
                            placeholder="Password"
                            placeholderTextColor="white"
                            secureTextEntry={true}
                            onChangeText={(password) => setPassword(password)}
                        />
                    </View>
                    <View style={styles.loginBtn}>
                        <Text style={styles.login} onPress={()=> navigation.navigate("Home")}>
                            Login
                        </Text>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.createAccount} onPress={()=> navigation.navigate("ResetPass")}>
                        Forgot Password?
                        </Text>
                    </TouchableOpacity>
                    <Image source={{
                            width:180,
                            height:200,
                            marginBottom:20,
                            alignItems: 'center',
                            uri:"https://i.ikman-st.com/gas-cylinder-for-sale-gampaha-13/009b5211-6b34-4643-a513-a37b2afd4ff0/1200/800/fitted.jpg"
                    }}
                    />
                    <TouchableOpacity>
                        <Text style={styles.createAccount} onPress={()=> navigation.navigate("SignUp")}>
                            Don't have an account? Create New Account
                        </Text>
                    </TouchableOpacity>
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
            alignItems: "center",
        },
        TextInput: {
            height: 50,
            flex: 1,
            padding: 10,
            fontSize: 15,
        },
        forgot_button: {
            height: 30,
            marginBottom: 20,
            color: 'white',
        },
        loginBtn: {
            width: "30%",
            borderRadius: 25,
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 5,
            marginBottom: 10,
            backgroundColor: "orange",
        },
        login: {
            color: 'black',
            fontSize: 18,
            fontWeight: 'bold',
            opacity: 0.6,
        },
        loginText: {
            color: 'white',
            fontSize: 15,
            opacity: 0.7,
        },
        signUp: {
            color: 'orange',
            fontSize: 28,
            fontWeight: 'bold',
            paddingTop: 0,
            paddingRight: 100,
            marginTop: 100,
            alignItems: 'center',
        },
        signUpapp: {
            color: 'blue',
            fontSize: 26,
            fontWeight: 'bold',
            paddingBottom:50,
            paddingTop: 0,
            paddingRight: 100,
            alignItems: 'center',
        },
        createAccount: {
            height: 30,
            marginBottom: 10,
            marginTop: 10,
            color: 'white',
        },
    });
    
export default Login;