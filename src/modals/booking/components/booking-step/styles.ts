import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { color, spacing, typography } from '../../../../theme';

interface Style {
  container: ViewStyle;
  stepName: TextStyle;
  stepIndicator: TextStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    bottom: 8,
    position: 'absolute',
    left: spacing.base,
    right: spacing.base,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  stepName: {
    ...typography.title3,
    color: color.textInverted,
  },
  stepIndicator: {
    ...typography.subheadlineRegular,
    color: color.textInverted,
  },
});
