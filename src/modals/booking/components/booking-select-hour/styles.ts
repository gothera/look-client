import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { color, spacing, typography } from '../../../../theme';

interface Style {
  container: ViewStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<Style>({
  container: { marginBottom: 3 * spacing.largest },
  title: {
    ...typography.subheadlineRegular,
    marginLeft: spacing.base,
    color: color.textPrimary,
  },
});
