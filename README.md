# React Native WebView Implementation

## Source

- https://github.com/react-native-webview/react-native-webview
- https://github.com/react-native-webview/react-native-webview/blob/master/docs/Getting-Started.md

## Cara setup React Native WebView

- create project react native

  `npx react-native init reactnative_WebView`

- install/add **react-native-webview**

  - untuk yarn
    `$ yarn add react-native-webview`

  - untuk npm
    `$ npm install react-native-webview `

- Jika Android

  - Apabila menggunakan **react-native-webview version >=6.X.X:**

    Pastikan AndroidX diaktifkan, dengan cara mengedit android/gradle.properties dan menambahkan 2 baris:

    `android.useAndroidX=true `

    `android.enableJetifier=true`

  - Nah, jika sudah menggunakan **react-native-webview version <6**
    harusnya tidak memerlukan cara sebelumnya

## Cara menggunakan komponen React Native WebView

- import **Webview**

  `import { WebView } from 'react-native-webview';`

- Dan ini hasil akhirnya

  ```javascript
  import React from 'react';
  import {View, StyleSheet, StatusBar} from 'react-native';
  import {WebView} from 'react-native-webview';

  const App = () => {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor={'#FFFFFF'} />
        <WebView
          source={{uri: 'https://infinite.red'}}
          style={styles.webview}
        />
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
  ```


## By Anju 