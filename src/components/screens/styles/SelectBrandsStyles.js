import {StyleSheet, StatusBar} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const screenColors = {
  background: '#E5E5E5',
  submitActiveColor: '#0087FA',
  submitInactiveColor: '#8B8B8B',
  inactiveBrandGridItemBackground: '#C6C6C6',
  activeBrandGridItemBackground: '#fff',
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
    backgroundColor: 'transparent',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  bodyContainer: {
    flex: 0.72,
    width: maxContentWidth,
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
  item: {
    backgroundColor: 'transparent',
    padding: 20,
    marginVertical: 8,
    width: maxContentWidth,
  },
  itemHeaderText: {
    fontSize: 28,
    fontFamily: 'Roboto-BlackItalic',
  },
  itemTitle: {
    fontSize: 24,
  },
});

export default styles;
