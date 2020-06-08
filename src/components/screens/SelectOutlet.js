import React, {Component} from 'react';
import {StatusBar, Text, View, Button} from 'react-native';

import styles from './styles/SelectOutletStyles';

export default class SelectOutlet extends Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <View style={styles.rootContainer}>
          <Text>Selet Outlet Screen</Text>
          <Button
            onPress={() => this.props.navigation.navigate('View Outlet')}
            title="Select"
          />
        </View>
      </>
    );
  }
}
