import {StyleSheet, StatusBar} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const screenColors = {
  background: '#F3F7F8',
  black: '#000',
  headerBackground: '#0087FA',
};

const maxContentWidth = wp('86.374695863746959%');

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: screenColors.headerBackground,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rootContainer: {
    flex: 1,
    width: wp('100%'),
    backgroundColor: screenColors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 0.1,
    width: wp('100%'),
    backgroundColor: screenColors.headerBackground,
  },
  body: {
    flex: 0.9,
    width: wp('100%'),
    backgroundColor: screenColors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: hp('0%'),
    left: 0,
    right: 0,
    top: hp('90%'),
    height: hp('10%'),
    width: wp('100%'),
    backgroundColor: screenColors.background,
  },
  submitText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    height: 150,
    width: wp('100%'),
    justifyContent: 'center',
    marginBottom: 8,
    padding: 20,
  },
  title: {
    fontSize: 32,
  },
  rootCategoryContainer: {
    flex: 0.15,
    width: wp('100%'),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  categoryContainerHeadingView: {
    height: hp('5%'),
    width: wp('100%'),
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  categoryContainerHeading: {
    fontFamily: 'Roboto-Black',
    fontSize: hp('2.5%'),
    marginLeft: wp('5%'),
  },
  categoryContainer: {
    height: hp('7.5%'),
    width: hp('7.5%'),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  categoryImageContainer: {
    height: '75%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  categoryTexContainer: {
    height: '20%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  categoryImage: {
    height: '40%',
    resizeMode: 'contain',
  },
  categoryText: {
    fontFamily: 'Roboto-Medium',
    fontSize: hp('1.3%'),
  },
});

export default styles;
