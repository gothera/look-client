import { StyleSheet, ViewStyle } from 'react-native';
import { spacing } from '../../../../theme';

interface Style {
  container: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    paddingTop: spacing.base,
    paddingBottom: spacing.small,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
