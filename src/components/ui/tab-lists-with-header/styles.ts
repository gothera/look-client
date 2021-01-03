import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { color, typography } from '../../../theme';

interface Style {
  container: ViewStyle;
  label: TextStyle;
  tab: ViewStyle;
  indicator: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: color.background,
  },
  label: { ...typography.body, color: color.muted },
  tab: {
    elevation: 0,
    shadowOpacity: 0,
    backgroundColor: color.background,
  },
  indicator: {
    backgroundColor: color.textPrimary,
  },
});
