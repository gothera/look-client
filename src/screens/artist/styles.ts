import { Platform, StyleSheet, ViewStyle } from 'react-native';
import { ANDROID_TOP_BAR_HEIGHT } from '../../res/constants';
import { color, spacing } from '../../theme';

interface Style {
  container: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: color.background,
    ...Platform.select({
      android: {
        marginTop: ANDROID_TOP_BAR_HEIGHT + spacing.base,
      },
    }),
  },
});
