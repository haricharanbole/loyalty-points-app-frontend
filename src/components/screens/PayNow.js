import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function PayNow() {
  return (
    <View style={styles.rootContainer}>
      <Text>Pay Now!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
