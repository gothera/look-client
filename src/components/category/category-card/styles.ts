import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { ImageStyle } from 'react-native-fast-image';
import { BORDER_RADIUS, CATEGORY_CARD_DIAMETER } from '../../../res/constants';
import { spacing } from '../../../theme';

interface Style {
  container: ViewStyle;
  image: ImageStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    marginVertical: spacing.smaller,
    width: CATEGORY_CARD_DIAMETER,
    height: CATEGORY_CARD_DIAMETER,
    borderRadius: BORDER_RADIUS,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  image: {
    flex: 1,
    borderRadius: BORDER_RADIUS,
  },
});
