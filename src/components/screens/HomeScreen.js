import React, {Component} from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  Button,
  Dimensions,
  Platform,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

console.log(windowWidth, windowHeight, Platform.OS);

export default class HomeScreen extends Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <View style={styles.rootContainer}>
          <Button onPress={this._onPressButton} title="Click on Brand" />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    height: windowHeight / 2,
    width: windowWidth,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});