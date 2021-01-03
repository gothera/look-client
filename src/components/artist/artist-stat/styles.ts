import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { color, typography } from '../../../theme';

interface Style {
  container: ViewStyle;
  rowContainer: ViewStyle;
  count: TextStyle;
  name: TextStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    alignItems: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  count: {
    ...typography.bodySemiBold,
    color: color.textPrimary,
  },
  name: {
    ...typography.subheadlineRegular,
    color: color.muted,
    marginTop: 2,
  },
});
