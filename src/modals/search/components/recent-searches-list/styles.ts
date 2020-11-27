import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { color, spacing, typography } from '../../../../theme';

interface Style {
  listHeaderContainer: ViewStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<Style>({
  listHeaderContainer: {
    marginTop: spacing.base,
    paddingHorizontal: spacing.base,
  },
  title: {
    ...typography.body,
    color: color.textPrimary,
  },
});
