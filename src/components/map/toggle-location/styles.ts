import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { color, spacing, typography } from '../../../theme';

interface Style {
  container: ViewStyle;
  rowContainer: ViewStyle;
  name: TextStyle;
  mapContainer: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    marginVertical: spacing.smaller,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    ...typography.body,
    color: color.textPrimary,
    marginLeft: spacing.smaller,
  },
  mapContainer: {
    marginVertical: spacing.small,
  },
});
