import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import {WebView} from 'react-native-webview';

const App = () => {
  return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor={'#FFFFFF'} />
        <WebView source={{uri: 'https://infinite.red'}} style={styles.webview} />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    marginTop: 20,
    flex: 1,
  },
});

export default App;
