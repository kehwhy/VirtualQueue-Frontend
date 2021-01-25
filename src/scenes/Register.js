import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Form, Item, Input, Content, Label, Button} from 'native-base';

export default function RegisterScene() {
  return (
    <View style={styles.container}>
      <Content>
        <Form style={styles.form}>
              <Item floatingLabel style={styles.formItem} >
                <Label style={styles.itemLabel}>Username</Label>
                <Input />
              </Item>
              <Item floatingLabel style={styles.formItem} >
                <Label style={styles.itemLabel}>Email</Label>
                <Input />
              </Item>
              <Item floatingLabel style={styles.formItem} >
                <Label style={styles.itemLabel}>Password</Label>
                <Input />
              </Item>
              <Item floatingLabel style={styles.formItem} >
                <Label style={styles.itemLabel}>Password</Label>
                <Input />
              </Item>
        </Form>
        <Button rounded success style={styles.button}>
          <Text style={styles.buttonText}>Sign Up!</Text>
        </Button>
      </Content>
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
  form: {
    width: '100%',
    paddingTop: '25%',
    paddingBottom: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formItem: {
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemLabel: {
    paddingLeft: '2%', 
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white'
  }

});
