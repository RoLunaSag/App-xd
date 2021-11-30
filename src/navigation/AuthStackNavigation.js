import React from "react";
import { View, Text } from "react-native";

// Importar la navegacion
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Importar las screens
import LoginScreen from "../screen/LoginScreen";
import RegisterScreen from "../screen/RegisterScreen";

export default function AuthStackNavigation() {
  const Stack = createNativeStackNavigator();

  return (
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
  );
}
