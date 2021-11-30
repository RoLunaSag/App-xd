import React, { useState } from "react";
import { View, Text } from "react-native";
// Importar la navegacion
import { NavigationContainer } from "@react-navigation/native";

// Importar los Stacks
import AuthStackNavigation from "./AuthStackNavigation";
import HomeStackNavigation from "./HomeStackNavigation";

export default function Router() {
  const [status, setStatus] = useState(true);

  return (
    <NavigationContainer>
      {status ? <HomeStackNavigation /> : <AuthStackNavigation />}
    </NavigationContainer>
  );
}
