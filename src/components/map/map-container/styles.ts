import { StyleSheet, ViewStyle } from 'react-native';
import { ImageStyle } from 'react-native-fast-image';
import { BORDER_RADIUS } from '../../../res/constants';

interface Style {
  container: ViewStyle;
  mapImage: ImageStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    height: 200,
    width: '100%',
    borderRadius: BORDER_RADIUS,
  },
  mapImage: {
    flex: 1,
    borderRadius: BORDER_RADIUS,
  },
});
