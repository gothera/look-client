import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { spacing, typography, color } from '../../../../theme';

interface Style {
  scrollContainer: ViewStyle;
  textEntryName: TextStyle;
  textEntryDivider: ViewStyle;
  label: TextStyle;
  logoutText: TextStyle;
  logoutContainer: ViewStyle;
  versionText: TextStyle;
}

export const styles = StyleSheet.create<Style>({
  scrollContainer: {
    paddingBottom: spacing.larger,
  },
  textEntryName: {
    paddingHorizontal: spacing.base,
  },
  textEntryDivider: {
    marginHorizontal: spacing.base,
  },
  label: {
    ...typography.subheadline,
    color: color.textPrimary,
    marginLeft: spacing.base,
    marginTop: spacing.largest,
  },
  logoutText: {
    color: color.delete,
  },
  logoutContainer: {
    marginTop: spacing.largest,
  },
  versionText: {
    marginTop: spacing.largest,
    ...typography.footnoteRegular,
    color: color.muted,
    textAlign: 'center',
  },
});
