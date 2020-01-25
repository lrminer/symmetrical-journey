import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Note from './components/Note';
import Staff from './components/Staff';


export default function App() {
  return (
    <View style={styles.container}>
      <Staff />
      <Text>Open up App.js to start working on your app!</Text>
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
