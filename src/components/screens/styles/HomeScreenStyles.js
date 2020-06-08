import {StyleSheet, StatusBar} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const screenColors = {
  background: '#FFF',
  black: '#000',
};

const maxContentWidth = wp('86.374695863746959%');

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: maxContentWidth,
    backgroundColor: screenColors.background,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  submitText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default styles;
