import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { color, spacing, typography } from '../../../../theme';

interface Style {
  scrollContainer: ViewStyle;
  description: TextStyle;
  loginWithEmailBtn: ViewStyle;
  viewMarginTop: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  scrollContainer: {
    paddingHorizontal: spacing.base,
    paddingTop: spacing.larger,
  },
  description: {
    ...typography.bodyRegular,
    color: color.textPrimary,
    lineHeight: 20,
  },
  loginWithEmailBtn: {
    marginTop: spacing.largest,
  },
  viewMarginTop: {
    marginTop: spacing.larger,
  },
});
