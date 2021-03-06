import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const maxContentWidth = wp('86.374695863746959%');

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: maxContentWidth,
    backgroundColor: 'white',
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
