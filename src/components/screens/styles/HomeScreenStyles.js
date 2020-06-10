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
});

export default styles;
