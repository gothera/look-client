import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { color, spacing, typography } from '../../../../theme';

interface Style {
  container: ViewStyle;
  name: TextStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    paddingTop: spacing.base,
    paddingHorizontal: spacing.base,
    paddingBottom: spacing.small,
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    ...typography.title2Bold,
    color: color.textPrimary,
    marginLeft: spacing.small,
  },
});
