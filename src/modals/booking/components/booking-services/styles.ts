import { StyleSheet, ViewStyle } from 'react-native';
import { spacing } from '../../../../theme';

interface Style {
  container: ViewStyle;
  listContent: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: spacing.base,
    paddingTop: spacing.base,
  },
});
