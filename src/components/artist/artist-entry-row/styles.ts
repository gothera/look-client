import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { color, spacing, typography } from '../../../theme';

interface Style {
  container: ViewStyle;
  textContainer: ViewStyle;
  fullName: TextStyle;
  divider: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacing.base,
    paddingHorizontal: spacing.base,
  },
  textContainer: {
    marginLeft: spacing.smaller,
  },
  fullName: {
    ...typography.bodySemiBold,
    color: color.textPrimary,
  },
  divider: {
    marginHorizontal: spacing.base,
  },
});
