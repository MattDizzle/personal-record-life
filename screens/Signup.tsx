import * as React from 'react';
import { StyleSheet, TextInput, Button, Alert  } from 'react-native';

// import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create a Username</Text>
      <TextInput style={styles.username}/>
      <Text style={styles.title}>Enter your email </Text>
      <TextInput style={styles.username}/>
      <Text style={styles.title}>Password </Text>
      <TextInput style={styles.username}/>
      <Text style={styles.title}>Retype Password </Text>
      <TextInput style={styles.username}/>
      <Button
  onPress={() => Alert.alert('This button works')}
  title="Let's set a new Record"
  color="#006400"
  accessibilityLabel="Submit new user information"
/>
</View>
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
    backgroundColor: 'lightgrey',
  },
  btn: {
    backgroundColor: 'green'
  }
});
