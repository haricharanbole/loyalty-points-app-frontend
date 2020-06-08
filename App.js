import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SelectBrands from './src/components/screens/SelectBrands';
import HomeScreen from './src/components/screens/HomeScreen';
import SelectOutlet from './src/components/screens/SelectOutlet';
import ViewOutlet from './src/components/screens/ViewOutlet';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <>
        <NavigationContainer>
          <Stack.Navigator headerMode={'none'}>
            <Stack.Screen name="Brand Selection" component={SelectBrands} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Outlet Selection" component={SelectOutlet} />
            <Stack.Screen name="View Outlet" component={ViewOutlet} />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}
