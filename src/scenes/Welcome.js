import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Logo from '../../assets/amazing.svg'
import { Button } from 'native-base';

export default function WelcomeScene({ navigation }) {
  return (
    <View style={styles.container}>
      <Logo width={300} height={300}/>
      <View style={styles.innerContainer}>
        <Button
        onPress={() => navigation.navigate('Login')}
        success 
        rounded 
        style={styles.button
        }>
          <Text style={styles.buttonText}>Login</Text>
        </Button>
      </View>
      <View style={styles.innerContainer}>
        <Button 
        onPress={() => navigation.navigate('Register')}
        success 
        rounded
        style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    width: '100%',
    padding: '5%',
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '60%',
    margin: 'auto', 
    padding: "2%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white', 
    fontSize: 15,
  }

});
