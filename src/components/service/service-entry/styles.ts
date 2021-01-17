import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { color, spacing, typography } from '../../../theme';

interface Style {
  container: ViewStyle;
  rowContainer: ViewStyle;
  leftColumnContainer: ViewStyle;
  name: TextStyle;
  subheadline: TextStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    paddingVertical: spacing.base,
    paddingHorizontal: spacing.base,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftColumnContainer: {
    flex: 1,
    marginRight: spacing.base,
  },
  name: {
    ...typography.body,
    color: color.textPrimary,
  },
  subheadline: {
    ...typography.subheadlineRegular,
    color: color.textPrimary,
    marginTop: 2,
  },
});
