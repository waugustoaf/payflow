import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Home } from './src/pages/Home';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Home />
      <StatusBar backgroundColor='#9000ff' style='auto' />
    </SafeAreaView>
  );
}
