import { StyleSheet, ViewStyle } from 'react-native';
import { spacing } from '../../../../theme';

interface Style {
  rowContainer: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  rowContainer: {
    marginLeft: spacing.large,
    marginRight: spacing.base,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
