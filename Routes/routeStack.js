import React from "react";

//Stack Navigation
import { NavigationContainer } from "@react-navigation/native"; //envolver a navegação da aplicação.
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Isso permite que você use esse navegador de pilha para definir a navegação em sua aplicação.
const Stack = createNativeStackNavigator();

//paginas
import HomeScreen from "../screens/HomeScreen";
import Carrinho from "../Carrinho";

export default function RouteStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Carrinho"
        component={Carrinho}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
