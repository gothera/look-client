import { StyleSheet, ViewStyle } from 'react-native';
import { spacing } from '../../../../theme';

interface Style {
  contentContainer: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  contentContainer: {
    paddingTop: spacing.base,
    paddingHorizontal: spacing.base,
  },
});
