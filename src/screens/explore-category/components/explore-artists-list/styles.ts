import { StyleSheet, ViewStyle } from 'react-native';
import { spacing } from '../../../../theme';

interface Style {
  list: ViewStyle;
  contentList: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  list: {
    flex: 1,
  },
  contentList: {
    paddingHorizontal: spacing.base,
  },
});
