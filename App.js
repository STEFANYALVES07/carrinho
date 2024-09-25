import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import store from "./store";
import { NavigationContainer } from "@react-navigation/native"; //envolver a navegação da aplicação.
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Isso permite que você use esse navegador de pilha para definir a navegação em sua aplicação.
const Tab = createBottomTabNavigator();

import Routes from "./Routes";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
