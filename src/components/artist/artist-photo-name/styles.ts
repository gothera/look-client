import { StyleSheet, TextStyle, View, ViewStyle } from 'react-native';
import { color, spacing, typography } from '../../../theme';

interface Style {
  container: ViewStyle;
  fullName: TextStyle;
  cancelledContainer: ViewStyle;
  cancelledText: TextStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fullName: {
    ...typography.headlineSemiBold,
    color: color.textPrimary,
    marginLeft: spacing.smaller,
  },
  cancelledContainer: {
    ...typography.caption1Regular,
    backgroundColor: color.delete,
    padding: spacing.smallest,
    borderRadius: spacing.small,
    marginVertical: spacing.small,
  },
  cancelledText: {
    color: color.textInverted,
  },
});
