import React from 'react';
import {View, Button, Text, SafeAreaView} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import CustomStatusBar from '../shared/CustomStatusBar';

import PayNow from './PayNow';
import Rewards from './Rewards';
import styles from './styles/HomeScreenStyles';

function Home(props) {
  return (
    <>
      <CustomStatusBar
        isTranscluent={true}
        backgroundColor={'#0087FA'}
        barStyle={'dark-content'}
      />
      <SafeAreaView
        style={styles.safeContainer}
        forceInset={{top: 'always', bottom: 'always'}}>
        <View style={styles.rootContainer}>
          <View style={styles.header}></View>
          <View style={styles.body}>
            <Button
              onPress={() => props.navigation.navigate('Outlet Selection')}
              title="Click on Brand"
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

export default function HomeScreen(props) {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="PayNow" component={PayNow} />
        <Tab.Screen name="Rewards" component={Rewards} />
      </Tab.Navigator>
    </>
  );
}
