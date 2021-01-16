import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { typography, color, spacing } from '../../../theme';

interface Style {
  container: ViewStyle;
  label: TextStyle;
  rowContainer: ViewStyle;
  name: TextStyle;
  rightText: TextStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    width: '100%',
    paddingVertical: spacing.base,
  },
  label: {
    ...typography.caption1Regular,
    color: color.muted,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: spacing.smaller,
  },
  name: {
    ...typography.headline,
    color: color.textPrimary,
  },
  rightText: {
    ...typography.subheadlineRegular,
    color: color.textPrimary,
  },
});
