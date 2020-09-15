import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './routes/stackNav';

export default function App() {
  return (
    <Navigator />
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  textStyle: {
    color: '#5AC18D',
    fontSize: 40,
    fontStyle: 'italic'
  }
});
