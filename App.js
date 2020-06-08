import React, {Component} from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  Text,
  Dimensions,
  Platform,
} from 'react-native';

import SelectBrands from './src/components/screens/SelectBrands';
import HomeScreen from './src/components/screens/HomeScreen';
import SelectOutlet from './src/components/screens/SelectOutlet';
import ViewOutlet from './src/components/screens/ViewOutlet';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

console.log(windowWidth, windowHeight, Platform.OS);

export default class App extends Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
      </>
    );
  }
}
