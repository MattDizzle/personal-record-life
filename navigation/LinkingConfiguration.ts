import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Signup: {
            screens: {
              SignupScreen: 'signup',
            },
          },
          Login: {
            screens: {
              LoginScreen: 'login',
            },
          },
          Home: {
            screens: {
              HomeScreen: 'home',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
