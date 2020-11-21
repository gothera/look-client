import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { color, spacing, typography } from '../../../../theme';

interface Style {
  container: ViewStyle;
  textContainer: ViewStyle;
  fullName: TextStyle;
  description: TextStyle;
  date: TextStyle;
  divider: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    paddingVertical: spacing.base,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.base,
  },
  textContainer: {
    marginLeft: spacing.smaller,
  },
  fullName: {
    ...typography.subheadlineSemiBold,
    color: color.textPrimary,
  },
  description: {
    ...typography.bodyRegular,
    color: color.textPrimary,
    marginTop: 4,
  },
  date: {
    ...typography.footnoteRegular,
    color: color.muted,
    marginTop: 6,
  },
  divider: {
    marginHorizontal: spacing.base,
  },
});
