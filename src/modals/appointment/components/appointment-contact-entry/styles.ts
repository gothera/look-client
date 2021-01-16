import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { color, spacing, typography } from '../../../../theme';

interface Style {
  container: ViewStyle;
  label: TextStyle;
  textContainer: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  container: { width: '100%', paddingVertical: spacing.base },
  label: {
    ...typography.caption1Regular,
    color: color.muted,
  },
  textContainer: {
    marginVertical: spacing.smaller,
  },
});
