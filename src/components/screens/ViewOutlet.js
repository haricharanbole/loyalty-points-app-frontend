import React, {Component} from 'react';
import {StatusBar, StyleSheet, View, Text, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class ViewOutlet extends Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <View style={styles.rootContainer}>
          <Text style={styles.submitText}>{'Viewing Outlet'}</Text>
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
