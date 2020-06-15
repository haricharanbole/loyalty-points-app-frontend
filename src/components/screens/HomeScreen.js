import React from 'react';
import {View, Button, Text, SafeAreaView, ScrollView} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import CustomStatusBar from '../shared/CustomStatusBar';
import CustomIcon from '../shared/CustomIcon';

import PayNow from './PayNow';
import Rewards from './Rewards';
import styles from './styles/HomeScreenStyles';
import AppHeader from '../shared/AppHeader';

function HomeScreenContent(props) {
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
          <AppHeader headerFlex={0.1} />
          <View style={styles.body}>
            <ScrollView>
              <View>
                <Button
                  onPress={() => props.navigation.navigate('Outlet Selection')}
                  title="Click on Brand"
                />
              </View>
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

export default function HomeScreen(props) {
  return (
    <>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Stores') {
              iconName = focused ? 'stores' : 'stores';
            } else if (route.name === 'Pay Now') {
              iconName = focused ? 'paynow' : 'paynow';
            } else if (route.name === 'Rewards') {
              iconName = focused ? 'rewards' : 'rewards';
            }

            // You can return any component that you like here!
            return <CustomIcon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Stores" component={HomeScreenContent} />
        <Tab.Screen name="Pay Now" component={PayNow} />
        <Tab.Screen name="Rewards" component={Rewards} />
      </Tab.Navigator>
    </>
  );
}
