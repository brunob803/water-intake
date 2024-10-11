import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./src/HomeScreen";
import ProfileScreen from "./src/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};