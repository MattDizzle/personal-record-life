import * as React from 'react';
import { StyleSheet, TextInput, Button, Alert, ImageBackground, Image } from 'react-native';
import { Text, View } from '../components/Themed';
import bgImage from '../assets/images/yLOOp.jpg';
import PRlogo from '../assets/images/PRLogo1white.png';

export default function HomeScreen() {
  return (
    <ImageBackground source={bgImage} style={styles.backgroundContainer}>
    <View style={styles.container}>
    
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  username: {
    height: 50,
    width: 250,
    backgroundColor: '#64B5F6',
  },
  backgroundContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 40,
    height: 40,
    marginBottom: 10,
  }
});
