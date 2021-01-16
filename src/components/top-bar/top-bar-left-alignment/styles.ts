import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { color, spacing, typography } from '../../../theme';

interface Style {
  container: ViewStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    paddingTop: spacing.base,
    paddingHorizontal: spacing.base,
    paddingBottom: spacing.small,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    ...typography.title2Bold,
    color: color.textPrimary,
  },
});
