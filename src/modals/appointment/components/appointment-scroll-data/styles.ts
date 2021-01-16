import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { color, spacing, typography } from '../../../../theme';

interface Style {
  scrollContainer: ViewStyle;
  firstEntry: ViewStyle;
  appointmentCategory: TextStyle;
  logoutText: TextStyle;
  logoutContainer: ViewStyle;
  textEntryDivider: ViewStyle;
  chipCancelled: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  scrollContainer: {
    paddingHorizontal: spacing.base,
    marginTop: spacing.base,
    paddingBottom: spacing.largest,
  },
  firstEntry: {
    marginTop: spacing.base,
  },
  appointmentCategory: {
    ...typography.title3Bold,
    marginTop: spacing.larger,
  },
  logoutText: {
    color: color.delete,
  },
  logoutContainer: {
    marginTop: spacing.largest,
  },
  textEntryDivider: {
    marginHorizontal: spacing.base,
  },
  chipCancelled: {
    marginBottom: spacing.base,
  },
});
