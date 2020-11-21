import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { spacing, typography } from '../../../theme';

interface Style {
  container: ViewStyle;
  name: TextStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    marginLeft: spacing.smallest,
    ...typography.footnoteSemiBold,
    color: 'white',
  },
});
