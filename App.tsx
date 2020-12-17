import { StatusBar } from 'expo-status-bar';
import React from 'react';
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


  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
        
      </SafeAreaProvider>
    );
  }
}
