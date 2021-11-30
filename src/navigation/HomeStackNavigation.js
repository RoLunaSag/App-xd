import React from 'react'
import { View, Text } from 'react-native'


import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from '../screen/Home';

export default function HomeStackNavigation() {

    const Stack = createNativeStackNavigator()

    return (
       <Stack.Navigator initialRouteName='Home'>
           <Stack.Screen name='Home' component={Home}/>
       </Stack.Navigator>
    )
}
