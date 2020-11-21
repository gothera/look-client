import { StyleSheet, ViewStyle } from 'react-native';
import { ImageStyle } from 'react-native-fast-image';
import {
  BORDER_RADIUS,
  POST_CARD_HEIGHT,
  POST_CARD_WIDTH,
} from '../../../res/constants';

interface Style {
  container: ViewStyle;
  imageStyle: ImageStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    width: POST_CARD_WIDTH,
    height: POST_CARD_HEIGHT,
    borderRadius: BORDER_RADIUS,
  },
  imageStyle: {
    borderRadius: BORDER_RADIUS,
    flex: 1,
  },
});
