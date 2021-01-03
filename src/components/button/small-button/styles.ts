import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { BORDER_RADIUS } from '../../../res/constants';
import { color, spacing, typography } from '../../../theme';

interface Style {
  container: ViewStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    paddingVertical: spacing.smaller,
    paddingHorizontal: spacing.base,
    backgroundColor: color.brand,
    borderRadius: BORDER_RADIUS - 6,
  },
  title: {
    textAlign: 'center',
    ...typography.subheadline,
    color: color.textInverted,
  },
});
