import {StyleSheet, StatusBar} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const screenColors = {
  background: '#FFF',
  submitActiveColor: '#0087FA',
  submitInactiveColor: '#8B8B8B',
  inactiveBrandGridItemBackground: '#FBFBFB',
  activeBrandGridItemBackground: '#fff',
  black: '#000',
};

const maxContentWidth = wp('86.374695863746959%');

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: screenColors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rootContainer: {
    flex: 1,
    width: maxContentWidth,
    backgroundColor: 'transparent',
  },
  headerContainer: {
    flex: 0.28,
    width: maxContentWidth,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  submitButtonContainer: {
    flex: 0.36,
    width: maxContentWidth,
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  screenDescriptionContainer: {
    flex: 0.64,
    width: maxContentWidth,
    backgroundColor: 'transparent',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  bodyContainer: {
    flex: 0.72,
    width: maxContentWidth,
    backgroundColor: 'transparent',
  },
  submitButton: {
    height: hp('3%'),
    width: wp('25%'),
    paddingHorizontal: wp('2%'),
    backgroundColor: 'transparent',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  headingContainer: {
    flex: 0.5,
    width: maxContentWidth - wp('8%'),
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  subHeadingContainer: {
    flex: 0.5,
    width: maxContentWidth - wp('8%'),
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  submitTextActive: {
    fontFamily: 'Roboto-Medium',
    fontSize: hp('2%'),
    fontWeight: 'normal',
    color: screenColors.submitActiveColor,
  },
  submitTextInactive: {
    fontFamily: 'Roboto-Medium',
    fontSize: hp('2%'),
    fontWeight: 'normal',
    color: screenColors.submitInactiveColor,
  },
  heading: {
    fontFamily: 'Roboto-Medium',
    fontSize: hp('3%'),
    fontWeight: 'normal',
  },
  subHeading: {
    fontFamily: 'Roboto-Light',
    fontSize: hp('2%'),
    fontWeight: 'normal',
  },
  gridView: {
    flex: 1,
  },
  itemContainer: {
    flex: 1,
    padding: wp('2%'),
    height: wp('25%'),
    width: wp('25%'),
    backgroundColor: screenColors.inactiveBrandGridItemBackground,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainerActive: {
    flex: 1,
    padding: wp('2%'),
    height: wp('25%'),
    width: wp('25%'),
    backgroundColor: screenColors.activeBrandGridItemBackground,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: screenColors.black,
    shadowOpacity: 0.5,
    shadowRadius: wp('2%'),
    elevation: wp('2%'),
  },
  tickContainer: {
    width: '100%',
    flex: 0.1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  itemImageContainer: {
    flex: 0.8,
  },
  itemImage: {
    height: wp('15%'),
    width: wp('15%'),
    resizeMode: 'contain',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  sectionHeader: {
    fontFamily: 'Roboto-Medium',
    fontSize: 15,
    fontWeight: '600',
    color: screenColors.black,
    width: maxContentWidth,
    backgroundColor: screenColors.background,
  },
});

export default styles;
