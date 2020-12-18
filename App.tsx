import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Login from './screens/Login'
import Signup from './screens/Signup'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, ImageBackground } from 'react-native';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import bgImage from './assets/images/BG1.jpg'



export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  console.log("I'm a mobile App developer and This App is running")
  const Stack = createStackNavigator();

  

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
}
