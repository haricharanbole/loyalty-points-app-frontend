import React, {Component} from 'react';

import {
  StatusBar,
  View,
  Text,
  SectionList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import styles from './styles/SelectBrandsStyles';

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
            <View style={styles.headerContainer}>
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
                <View style={styles.headingContainer}>
                  <Text style={styles.heading}>{'Select brands'}</Text>
                </View>
                <View style={styles.subHeadingContainer}>
                  <Text style={styles.subHeading}>
                    {
                      'This will help us notify you on latest offers and rewards of your favourite brands'
                    }
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.bodyContainer}>
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
