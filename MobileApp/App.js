import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {WebView} from 'react-native-webview';

export default function App() {
  return (

    <WebView
    automaticallyAdjustContentInsets={false}
    source={{uri: "http://172.16.16.197:3000/"}}
    javaScriptEnabled={true}
    domStorageEnabled={true}
    startInLoadingState={true}
    style={{marginTop: 25}}
  />

    
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
