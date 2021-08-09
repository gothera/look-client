import { StyleSheet, ViewStyle } from 'react-native';
import { spacing } from '../../../../theme';

interface Style {
  container: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    paddingTop: spacing.smallest/10,
    paddingBottom: spacing.small/2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
