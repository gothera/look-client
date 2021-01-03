import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { color, spacing, typography } from '../../theme';

interface Style {
  emptyContainer: ViewStyle;
  emptyText: TextStyle;
}

export const styles = StyleSheet.create<Style>({
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
  },
  emptyText: {
    ...typography.headline,
    color: color.textPrimary,
    marginTop: spacing.large,
    textAlign: 'center',
  },
});
