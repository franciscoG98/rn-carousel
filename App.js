import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabOneScreen from './views/tabOne';

export default function App() {
  return (
    <View style={styles.container}>
      <TabOneScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faa',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
