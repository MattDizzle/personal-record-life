import React, { useReducer, useState } from 'react';
import { StyleSheet, TextInput, Button, Alert, ImageBackground, Image } from 'react-native';

// import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import bgImage from '../assets/images/yLOOp.jpg'
import PRlogo from '../assets/images/PRLogo1white.png';

//validation import 
import { formValidation, emailValidation, passwordValidation } from '../helperFunctions/validation'

export default class Signup extends React.Component {

  state = {
    userName: '',
    email: '',
    password: '',
    rePassword: '',
    error: null

  }
  render() {
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View style={styles.container}>
          <Image source={PRlogo} style={styles.logo} />
          {this.state.error ? <Text style={styles.error}>{this.state.error} </Text> : <Text> </Text>}

          <Text style={styles.title}>Create a Username</Text>
          <TextInput style={styles.input} value={this.state.userName} onChangeText={(input) => this.setState({ userName: `${input}` })} onBlur={() => {
            let isError = formValidation(this.state)?.error
            if (isError) {
              let error = formValidation(this.state).errorMessage
              this.setState({ error });
            }
            else {
              this.setState({ error: null });
            }

          }} />
          <Text style={styles.title}>Enter your email </Text>
          <TextInput style={styles.input} value={this.state.email} onChangeText={(input) => this.setState({ email: `${input}` })} onBlur={() => {
            let isError = emailValidation(this.state)?.error
            if (isError) {
              let error = emailValidation(this.state).errorMessage
              this.setState({ error });
            }
            else {
              this.setState({ error: null });
            }

          }} />
          <Text style={styles.title}>Password </Text>
          <TextInput style={styles.input} value={this.state.password} onChangeText={(input) => this.setState({ password: `${input}` })} onBlur={() => {
            let isError = passwordValidation(this.state)?.error
            if (isError) {
              let error = passwordValidation(this.state).errorMessage
              this.setState({ error });
            }
            else {
              this.setState({ error: null })
            }

          }} />
          <Text style={styles.title}>Retype Password </Text>
          <TextInput style={styles.input} value={this.state.rePassword} onChangeText={(input) => this.setState({ rePassword: `${input}` })} onBlur={() => {
            let isError = passwordValidation(this.state)?.error
            if (isError) {
              let error = passwordValidation(this.state).errorMessage
              this.setState({ error });
            }
            else {
              this.setState({ error: null })
            }

          }} />
          <Button
            onPress={() => Alert.alert('This button works')}
            title="Let's set a new Record"
            color="#006400"
            accessibilityLabel="Submit new user information"
            disabled={!!this.state.error}

          />
        </View>
      </ImageBackground>
    );
  }



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
