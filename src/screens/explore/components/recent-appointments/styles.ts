import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { color, spacing, typography } from '../../../../theme';

interface Style {
  container: ViewStyle;
  label: TextStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    marginHorizontal: -spacing.base,
  },
  label: {
    ...typography.body,
    color: color.textPrimary,
    marginBottom: spacing.base,
    marginLeft: spacing.base,
  },
});
