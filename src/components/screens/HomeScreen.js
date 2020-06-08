import React, {Component} from 'react';
import {StatusBar, View, Button, Text} from 'react-native';

import styles from './styles/HomeScreenStyles';

export default class HomeScreen extends Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <View style={styles.rootContainer}>
          <Text>Home Screen</Text>
          <Button
            onPress={() => this.props.navigation.navigate('Outlet Selection')}
            title="Click on Brand"
          />
        </View>
      </>
    );
  }
}
