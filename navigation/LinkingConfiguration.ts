import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              TabOneScreen: 'start',
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: 'create-user',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
