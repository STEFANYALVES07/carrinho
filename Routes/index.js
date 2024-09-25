import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

import AntDesign from "@expo/vector-icons/AntDesign";

import HomeScreen from "../screens/HomeScreen";
import Carrinho from "../Carrinho";

export default function Routes() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreens"
      screenOptions={{
        tabBarActiveTintColor: "purple",
        tabBarInactiveTintColor: "black",
        tabBarStyle: {
          backgroundColor: "white",
          borderTopColor: "transparent",
          padding: 5,
          bottom: 20,
          right: 15,
          left: 15,
          position: "absolute",
          shadowColor: "purple0",
          borderRadius: 15,
          shadowRadius: 7,
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,
          elevation: 8,
          alignItems: "center",
          alignContent: "center",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => {
            return <AntDesign name="home" size={25} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Carrinho"
        component={Carrinho}
        options={{
          tabBarIcon: ({ color }) => {
            return <AntDesign name="clockcircleo" size={25} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
