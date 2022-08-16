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

const Litro = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
        return (
            <View style={styles.container}>
                <TouchableOpacity>
      </TouchableOpacity>
                <View>
                    <Text style={styles.Litro}>Litro Gas</Text>
                    <Text style={styles.LitroKg}>37.5 kg</Text>
                    <Text style={styles.LitroKg}>12.5 kg</Text>
                    <Text style={styles.LitroKg}>5 kg</Text>
                </View>
                <StatusBar style="auto" />
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Enter prfered Weight"
                            placeholderTextColor="white"
                            onChangeText={(email) => setEmail(email)}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Enter your District"
                            placeholderTextColor="white"
                            secureTextEntry={true}
                            onChangeText={(password) => setPassword(password)}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Enter the City or Town"
                            placeholderTextColor="white"
                            secureTextEntry={true}
                            onChangeText={(password) => setPassword(password)}
                        />
                    </View>
                    <View style={styles.SrchBtn}>
                        <Text style={styles.Srch} onPress={()=> navigation.navigate("Home")}>
                            Search
                        </Text>
                    </View>
                    <Image source={{
                            width:240,
                            height:200,
                            marginBottom:20,
                            alignItems: 'center',
                            uri:"https://www.crestfoods.lk/wp-content/uploads/2020/07/litro-gases.jpg"
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
            justifyContent: "center",
        },
        inputView: {
            backgroundColor: "grey",
            opacity: 0.5,
            borderRadius: 15,
            width: "80%",
            height: 45,
            marginTop: 25,
        },
        TextInput: {
            height: 50,
            flex: 1,
            fontSize: 15,
            marginLeft: 20,
        },
        SrchBtn: {
            width: "40%",
            borderRadius: 25,
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 15,
            marginBottom: 20,
            backgroundColor: "darkblue",
        },
        Srch: {
            color: 'white',
            fontSize: 18,
            fontWeight: 'bold',
            opacity: 0.6,
        },
        Litro: {
            color: 'blue',
            fontSize: 28,
            fontWeight: 'bold',
            paddingRight: 160,
            marginTop: 50,
            alignItems: 'center',
        },
        LitroKg: {
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
            paddingTop: 10,
            marginLeft: 40,
            alignItems: 'center',
        },
    });
    
export default Litro;