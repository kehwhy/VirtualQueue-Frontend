import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Form, Item, Input, Content, Label, Button, Container} from 'native-base';
import MyFooter from '../components/Footer';
import { ScrollView } from 'react-native-gesture-handler';

export default function HomeScene() {
  return (
    <View style={{flex: 1}}>
        <ScrollView>
        </ScrollView>
        <View><MyFooter></MyFooter></View>
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


});
