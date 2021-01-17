import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { color, spacing, typography } from '../../../theme';

interface Style {
  container: ViewStyle;
  name: TextStyle;
  duration: TextStyle;
  textContainer: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    paddingVertical: spacing.base,
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    ...typography.body,
    color: color.textPrimary,
  },
  duration: {
    ...typography.caption1Regular,
    color: color.muted,
    marginTop: 2,
  },
  textContainer: {
    marginLeft: spacing.small,
  },
});
