import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { color, spacing, typography } from '../../../../theme';

interface Style {
  container: ViewStyle;
  label: TextStyle;
  addressType: TextStyle;
  textContainer: ViewStyle;
  map: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  container: { width: '100%', paddingVertical: spacing.base },
  label: {
    ...typography.caption1Regular,
    color: color.muted,
  },

  addressType: {
    ...typography.headline,
    color: color.textPrimary,
  },
  textContainer: {
    marginVertical: spacing.smaller,
  },
  map: {
    marginTop: spacing.smaller,
  },
});
