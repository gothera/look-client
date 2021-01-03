import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { spacing, typography } from '../../../../theme';

interface Style {
  container: ViewStyle;
  rowContainer: ViewStyle;
  nameText: TextStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    marginTop: spacing.base,
    paddingHorizontal: spacing.base,
    paddingBottom: spacing.smaller,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameText: {
    ...typography.bodySemiBold,
  },
});
