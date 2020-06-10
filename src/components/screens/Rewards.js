import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Rewards() {
  return (
    <View style={styles.rootContainer}>
      <Text>Rewards!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
