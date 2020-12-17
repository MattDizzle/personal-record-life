import * as React from 'react';
import { StyleSheet, TextInput, Button, Alert, ImageBackground } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import bgImage from '../assets/images/yLOOp.jpg'

export default function TabTwoScreen() {
  return (
    <ImageBackground source={bgImage} style={styles.backgroundContainer}>
    <View style={styles.container}>
      <Text style={styles.title}>Enter Username or email</Text>
      <TextInput style={styles.username}/>
      <Text style={styles.title}>Password </Text>
      <TextInput style={styles.username}/>
      <Button
  onPress={() => Alert.alert('This button works')}
  title="Let's set a new Record"
  color="#006400"
  accessibilityLabel="Submit new user information"
/>
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
  btn: {
    backgroundColor: 'green'
  },
  backgroundContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
