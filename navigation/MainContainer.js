import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import Notification from './screens/Notification';
import Login from './screens/Login';


//Screen names
const homeName = "Home";
const detailsName = "Map";
const settingsName = "Notification";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    
      <Tab.Navigator
        initialRouteName={Login}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;
            console.log("hi ........ "+rn);

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === detailsName) {
              iconName = focused ? 'map' : 'map-outline';

            } else if (rn === settingsName) {
              iconName = focused ? 'notifications' : 'notifications-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'orange',
          inactiveTintColor: 'darkblue',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={detailsName} component={MapScreen} />
        <Tab.Screen name={settingsName} component={Notification} />

      </Tab.Navigator>
  );
}

export default MainContainer;