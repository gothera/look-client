import { StyleSheet, ViewStyle } from 'react-native';
import { spacing } from '../../../theme';

interface Style {
  contentContainer: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  contentContainer: {
    marginTop: 10,
    paddingLeft: 6,
    paddingRight: spacing.base,
  },
});
