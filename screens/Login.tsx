import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, Alert, ImageBackground, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import bgImage from '../assets/images/yLOOp.jpg';
import PRlogo from '../assets/images/PRLogo1white.png';

import { connect } from 'react-redux';
import { auth,createUserProfileDocument } from '../firebase/firebase.utils';
import { setCurrentUser } from '../redux/user/user.action'



const onLogin = (email, password, setCurrentUser) => {

 
  auth.signInWithEmailAndPassword(email, password).then(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          
          setCurrentUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });
        });
      } 
    })
  })
  .catch(err=>console.log(err));
}

const Login = (props) => {
  const { navigation, setCurrentUser,currentUser } = props
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log(currentUser);
  if(currentUser){
    navigation.navigate("Dashboard")
  }
  return (
    <ImageBackground source={bgImage} style={styles.backgroundContainer}>
      <View style={styles.container}>
        <Image source={PRlogo} style={styles.logo} />
        <Text style={styles.title} >Enter Username or email</Text>
        <TextInput style={styles.username} value={email} onChangeText={(input) => setEmail(input)} />
        <Text style={styles.title}>Password </Text>
        <TextInput style={styles.username} value={password} onChangeText={(input) => setPassword(input)} />
        <Button
          onPress={() => onLogin(email, password, setCurrentUser)}
          title="Let's set a new Record"
          color="#006400"
          accessibilityLabel="Submit new user information"
        />
        <Button
          title="New Account?"
          onPress={() => navigation.navigate("SignUp")}
        />
      </View>
    </ImageBackground>
  );
}
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
})

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser

})
export default connect(mapStateToProps, mapDispatchToProps)(Login);




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
    backgroundColor: 'green',
    marginTop: 10,
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
