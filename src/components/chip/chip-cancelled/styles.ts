import { StyleSheet, TextStyle, View, ViewStyle } from 'react-native';
import { color, spacing, typography } from '../../../theme';

interface Style {
  cancelledContainer: ViewStyle;
  cancelledText: TextStyle;
  container: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  cancelledContainer: {
    backgroundColor: color.delete,
    paddingVertical: spacing.smallest,
    paddingHorizontal: spacing.small,
    borderRadius: spacing.small,
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
  },
  cancelledText: {
    ...typography.caption1,
    color: color.textInverted,
  },
  container: {
    flexDirection: 'row',
  },
});
