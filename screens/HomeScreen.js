import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text
          style={styles.LogiScrn}
          onPress={() => navigation.navigate("Login")}>
          Logout
        </Text>
      </TouchableOpacity>
      <Text style={styles.header}>
        Select your LP Gas Category
      </Text>
        <TouchableOpacity style={styles.img1} onPress={()=> navigation.navigate("Litro")}>
        <Image source={{
                width:180,
                height:180,
                marginBottom:20,
                alignItems: 'center',
                uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeOmdkUr72Ye90vjrYGSQbbthawetZVekEhw&usqp=CAU"
          }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.img2} onPress={()=> navigation.navigate("Laugh")}>
        <Image source={{
                width:180,
                height:180,
                marginBottom:20,
                alignItems: 'center',
                uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7NRsnqUApyLYV7KnDwlRXye0cpqd9eEGC_RjhP7Nl_b7indiD9eodTjAkvSVwS6qFxVM&usqp=CAU"
          }}
          />
        </TouchableOpacity>
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  LogiScrn: {
    marginBottom: 0,
    marginTop: 10,
    color: "green",
    marginLeft: 280,
    fontWeight: "bold",
    fontSize: 16,
  },
  img1 : {
    marginLeft: 90,
    marginBottom: 20,
    marginTop: 10
  },
  img2 : {
    marginLeft: 90
  },
  header :{
    color: 'orange',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 40,
    marginBottom: 30
  }
});
