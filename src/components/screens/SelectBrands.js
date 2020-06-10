import React, {Component} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';

import {SectionGrid} from 'react-native-super-grid';

import CustomStatusBar from '../shared/CustomStatusBar';
import styles from './styles/SelectBrandsStyles';

const brands = require('../../assets/images/SelectBrands/brands.json')
  .BrandLogos;

export default class SelectBrands extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitActive: true,
      brands: this.addSelectedFlagToBrands(),
    };
  }

  addSelectedFlagToBrands = () => {
    brands.forEach((item) => (item.isSelected = false));
    return brands;
  };

  renderHeader = () => (
    <>
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
    </>
  );

  renderBody = () => (
    <SectionGrid
      itemDimension={90}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      sections={[
        {
          title: 'AUTOMOTIVE',
          data: this.state.brands.slice(0, 9),
        },
        {
          title: 'FOOD AND BEVERAGE',
          data: this.state.brands.slice(9, 12),
        },
        {
          title: 'CONSUMER PRODUCTS',
          data: this.state.brands.slice(12, 15),
        },
      ]}
      style={styles.gridView}
      renderItem={this.renderGridItem}
      renderSectionHeader={this.renderSectionHeader}
    />
  );

  renderSectionHeader = ({section}) => (
    <Text style={styles.sectionHeader}>{section.title}</Text>
  );

  renderGridItem = ({item, section, index}) => (
    <TouchableOpacity
      style={
        item.isSelected ? styles.itemContainerActive : styles.itemContainer
      }
      onPress={() => {
        const updatedBrands = this.state.brands;
        updatedBrands.forEach((brand) => {
          if (brand.ID === item.ID) {
            brand.isSelected = !brand.isSelected;
          }
        });
        this.setState({
          brands: updatedBrands,
        });
      }}>
      {item.isSelected ? (
        <View style={styles.tickContainer}>
          <Image
            source={require('../../assets/images/SelectBrands/tick.png')}
          />
        </View>
      ) : (
        <View style={styles.tickContainer}>{null}</View>
      )}

      <View style={styles.itemImageContainer}>
        <Image style={styles.itemImage} source={{uri: item.imageURI}} />
      </View>
      <View style={styles.tickContainer}>{null}</View>
    </TouchableOpacity>
  );

  render() {
    return (
      <>
        <CustomStatusBar
          isTranscluent={true}
          backgroundColor={'#FFF'}
          barStyle={'dark-content'}
        />
        <SafeAreaView style={styles.safeContainer}>
          <View style={styles.rootContainer}>
            <View style={styles.headerContainer}>{this.renderHeader()}</View>
            <View style={styles.bodyContainer}>{this.renderBody()}</View>
          </View>
        </SafeAreaView>
      </>
    );
  }
}
