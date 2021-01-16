import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { typography, color, spacing } from '../../../theme';

interface Style {
  container: ViewStyle;
  title: TextStyle;
  root: ViewStyle;
  leftIconContainer: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    width: '100%',
    paddingVertical: spacing.base,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    ...typography.headline,
    color: color.textPrimary,
  },
  root: {
    width: '100%',
  },
  leftIconContainer: {
    marginRight: spacing.smaller,
  },
});
