import { StyleSheet, ViewStyle } from 'react-native';
import { color, spacing, typography } from '../../theme';

interface Style {
  container: ViewStyle;
  scrollContentContainer: ViewStyle;
  continueBtn: ViewStyle;
  orDivider: ViewStyle;
  errorLabel: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: color.background,
  },
  scrollContentContainer: {
    paddingTop: spacing.larger,
    paddingHorizontal: spacing.base,
  },
  continueBtn: {
    marginTop: spacing.larger,
  },
  orDivider: {
    marginTop: spacing.largest,
    marginBottom: 4,
  },
  errorLabel: {
    ...typography.caption2Regular,
    color: color.delete,
    marginTop: spacing.smallest,
  },
});
