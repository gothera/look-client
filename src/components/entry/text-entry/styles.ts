import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { typography, color, spacing } from '../../../theme';

interface Style {
  container: ViewStyle;
  title: TextStyle;
  root: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    width: '100%',
    paddingVertical: spacing.base,
  },
  title: {
    ...typography.headline,
    color: color.textPrimary,
  },
  root: {
    width: '100%',
  },
});
