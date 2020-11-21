import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { color, spacing, typography } from '../../../theme';

interface Style {
  container: ViewStyle;
  textContainer: ViewStyle;
  fullName: TextStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacing.base,
  },
  textContainer: {
    marginLeft: spacing.smaller,
  },
  fullName: {
    ...typography.bodySemiBold,
    color: color.textPrimary,
  },
});
