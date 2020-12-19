import React, { useReducer, useState } from 'react';
import { StyleSheet, TextInput, Button, Alert, ImageBackground, Image } from 'react-native';

// import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import bgImage from '../assets/images/yLOOp.jpg'
import PRlogo from '../assets/images/PRLogo1white.png';

//validation import 
import { formValidation } from '../helperFunctions/validation'

export default function Signup() {
  const reducer = (state, action) => {

    switch (action.type) {
      case 'userName':
        return { ...state, userName: action.payload }
      case 'email':
        return { ...state, email: action.payload }
      case 'password':
        return { ...state, password: action.payload }
      case 'rePassword':
        return { ...state, rePassword: action.payload }

      default:
        return state
    }


  }

  const [state, dispatch] = useReducer(reducer, { userName: null, email: null, password: null, rePassword: null })
  const [error, setError] = useState(null)


  return (
    <ImageBackground source={bgImage} style={styles.backgroundContainer}>
      <View style={styles.container}>
        <Image source={PRlogo} style={styles.logo} />
        {error ? <Text style={styles.error}>{error} </Text> : <Text> </Text>}

        <Text style={styles.title}>Create a Username</Text>
        <TextInput style={styles.input} value={state.userName} onChangeText={(input) => dispatch({ type: 'userName', payload: `${input}` })} onBlur={() => {
          let isError = formValidation(state)?.error
          if (isError) {
            let error = formValidation(state).errorMessage
            setError(error);
          }
          else {
            setError(null)
          }

        }} />
        <Text style={styles.title}>Enter your email </Text>
        <TextInput style={styles.input} value={state.email} onChangeText={(input) => dispatch({ type: 'email', payload: `${input}` })} onBlur={() => {
          let isError = formValidation(state)?.error
          if (isError) {
            let error = formValidation(state).errorMessage
            setError(error);
          }
          else {
            setError(null)
          }

        }} />
        <Text style={styles.title}>Password </Text>
        <TextInput style={styles.input} value={state.password} onChangeText={(input) => dispatch({ type: 'password', payload: `${input}` })} onBlur={() => {
          let isError = formValidation(state)?.error
          if (isError) {
            let error = formValidation(state).errorMessage
            setError(error);
          }
          else {
            setError(null)
          }

        }} />
        <Text style={styles.title}>Retype Password </Text>
        <TextInput style={styles.input} value={state.rePassword} onChangeText={(input) => dispatch({ type: 'rePassword', payload: `${input}` })} onBlur={() => {
          let isError = formValidation(state)?.error
          if (isError) {
            let error = formValidation(state).errorMessage
            setError(error);
          }
          else {
            setError(null)
          }

        }} />
        <Button
          onPress={() => Alert.alert('This button works')}
          title="Let's set a new Record"
          color="#006400"
          accessibilityLabel="Submit new user information"
          disabled={!!error}

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
  error: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input: {
    height: 50,
    width: 250,
    backgroundColor: 'lightgrey',
    marginBottom: 10,
    borderRadius: 5,
    padding: 4
  },
  btn: {
    backgroundColor: 'green'
  },
  backgroundContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  }
});
