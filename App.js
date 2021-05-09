import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Conversor from './src/conversor'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Conversor moedaA="USD" moedaB="BRL"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

// https://free.currconv.com/api/v7/convert?q=USD_PHP&compact=ultra&apiKey=e9e7331320075f7f1caa
export default App;
