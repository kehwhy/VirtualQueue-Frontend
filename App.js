import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScene from './src/scenes/Welcome';
import RegisterScene from './src/scenes/Register';
import LoginScene from './src/scenes/Login';
import HomeScene from './src/scenes/Home';

const Stack = createStackNavigator();

export default function App () {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScene}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Register" component={RegisterScene} />
        <Stack.Screen name="Login" component={LoginScene} />
        <Stack.Screen name="Home" component={HomeScene} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
