import { StyleSheet, ViewStyle } from 'react-native';
import { color, spacing } from '../../theme';

interface Style {
  container: ViewStyle;
  scrollContentContainer: ViewStyle;
  continueBtn: ViewStyle;
  orDivider: ViewStyle;
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
});
