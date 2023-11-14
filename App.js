import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//import { StatusBar, View } from 'react-native';
import { WebView } from 'react-native-webview';
import ModelViewer from './ModelViewer';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <StatusBar hidden />
      <ModelViewer />
      <WebView
        source={{ uri: ' https://threejs.org/examples/models/gltf/Soldier.glb' }} // Replace with your web page
        style={{ flex: 1 }}
      />
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
