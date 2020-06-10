import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

import CustomStatusBar from '../shared/CustomStatusBar';

import styles from './styles/SelectOutletStyles';

export default class SelectOutlet extends Component {
  render() {
    return (
      <>
        <CustomStatusBar
          isTranscluent={true}
          backgroundColor={'#FFF'}
          barStyle={'dark-content'}
        />
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
