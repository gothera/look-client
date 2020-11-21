import { StyleSheet, ViewStyle } from 'react-native';
import { spacing } from '../../theme';

interface Style {
  viewMargin: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  viewMargin: {
    marginTop: spacing.larger,
  },
});
