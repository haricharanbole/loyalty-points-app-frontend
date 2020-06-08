import React, {Component} from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  Text,
  SectionList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const DATA = [
  {
    title: 'AUTOMOTIVE',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'FOOD AND BEVERAGE',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'CONSUMER PRODUCTS',
    data: ['Water', 'Coke', 'Beer'],
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.itemTitle}>{title}</Text>
  </View>
);

export default class SelectBrands extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitActive: true,
    };
  }
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" translucent={true} />
        <SafeAreaView style={styles.safeContainer}>
          <View style={styles.rootContainer}>
            <View style={styles.submitButtonContainer}>
              <TouchableOpacity
                style={styles.submitButton}
                onPress={() => this.props.navigation.navigate('Home')}
                disabled={!this.state.isSubmitActive}>
                <Text
                  style={
                    this.state.isSubmitActive
                      ? styles.submitTextActive
                      : styles.submitTextInactive
                  }>
                  {'Submit >'}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.screenDescriptionContainer}>
              <Text>{'Hello world!'}</Text>
            </View>
            <View style={styles.brandsContainer}>
              <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({item}) => <Item title={item} />}
                renderSectionHeader={({section: {title}}) => (
                  <Text style={styles.itemHeaderText}>{title}</Text>
                )}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  rootContainer: {
    flex: 1,
    width: wp('100%'),
    backgroundColor: 'white',
  },
  submitButtonContainer: {
    flex: 0.1,
    width: wp('100%'),
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  screenDescriptionContainer: {
    flex: 0.18,
  },
  brandsContainer: {
    flex: 0.72,
    width: wp('100%'),
  },
  submitButton: {
    height: hp('3%'),
    width: wp('25%'),
    paddingHorizontal: wp('2%'),
    marginHorizontal: wp('2%'),
    backgroundColor: 'transparent',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  submitTextActive: {
    fontSize: hp('2%'),
    fontWeight: 'normal',
    color: '#0087FA',
  },
  submitTextInactive: {
    fontSize: hp('2%'),
    fontWeight: 'normal',
    color: '#8B8B8B',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    width: wp('100%'),
  },
  itemHeaderText: {
    fontSize: 28,
    backgroundColor: '#fff',
  },
  itemTitle: {
    fontSize: 24,
  },
});
