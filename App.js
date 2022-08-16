import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import MainContainer from "./navigation/MainContainer";
import Login from "./navigation/screens/Login";
import SignUp from "./navigation/screens/SignUp";
import HomeScreen from "./navigation/screens/HomeScreen";
import ResetPass from "./navigation/screens/ResetPass";
import Litro from "./navigation/screens/Litro";
import Laugh from "./navigation/screens/Laugh";

const stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <stack.Screen name="Login" component={Login} />
        <stack.Screen name="SignUp" component={SignUp} />
        <stack.Screen name="Home" component={MainContainer} />
        <stack.Screen name="Litro" component={Litro} />
        <stack.Screen name="Laugh" component={Laugh} />
        <stack.Screen name="ResetPass" component={ResetPass} />
        <stack.Screen name="HomeScreen" component={HomeScreen} />
      </stack.Navigator>
      {/* // <MainContainer/> */}
    </NavigationContainer>
  );
}

export default App;
