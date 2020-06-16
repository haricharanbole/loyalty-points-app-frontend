import React from 'react';
import {
  View,
  Button,
  Text,
  SafeAreaView,
  VirtualizedList,
  Image,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FlatGrid} from 'react-native-super-grid';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const Tab = createBottomTabNavigator();

import CustomStatusBar from '../shared/CustomStatusBar';
import CustomIcon from '../shared/CustomIcon';
import PayNow from './PayNow';
import Rewards from './Rewards';
import styles from './styles/HomeScreenStyles';
import AppHeader from '../shared/AppHeader';
import categories from '../../json/StoreCategories';

const SECTIONS = [StoreCategories, TopBrands, Offers];

export default function HomeScreen() {
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
            <VirtualizedList
              data={SECTIONS}
              initialNumToRender={3}
              renderItem={({item}) => <item.tag parentProps={props} />}
              keyExtractor={(item) => item.key}
              getItemCount={getSectionCount}
              getItem={getSection}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const getSection = (data, index) => {
  return {
    key: `${index}`,
    tag: SECTIONS[index],
  };
};

const getSectionCount = () => {
  return SECTIONS.length;
};

function StoreCategories() {
  return (
    <View style={styles.rootCategoryContainer}>
      <View style={styles.categoryContainerHeadingView}>
        <Text style={styles.categoryContainerHeading}>{'Nearby Stores'}</Text>
      </View>
      <FlatGrid
        itemDimension={hp('15%')}
        data={categories}
        renderItem={({item}) => <Category category={item} />}
      />
    </View>
  );
}

function Category(props) {
  return (
    <View style={styles.categoryContainer}>
      <View style={styles.categoryImageContainer}>
        <Image source={props.category.logo} style={styles.categoryImage} />
      </View>
      <View style={styles.categoryTexContainer}>
        <Text style={styles.categoryText}>{props.category.name}</Text>
      </View>
    </View>
  );
}
function TopBrands(props) {
  return (
    <View>
      <Text>Top Brands</Text>
      <Button
        onPress={() =>
          props.parentProps.navigation.navigate('Outlet Selection')
        }
        title="Click on Brand"
      />
    </View>
  );
}
function Offers(props) {
  return (
    <View>
      <Text>Brands</Text>
    </View>
  );
}
