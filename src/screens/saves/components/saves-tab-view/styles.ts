import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { color, typography } from '../../../../theme';

interface Style {
  tabBar: ViewStyle;
  indicator: ViewStyle;
  label: TextStyle;
  tabStyle: ViewStyle;
  selectedLabel: TextStyle;
}

export const styles = StyleSheet.create<Style>({
  tabBar: {
    backgroundColor: color.background,
  },
  indicator: {
    backgroundColor: color.textSecondary,
  },
  label: {
    ...typography.subheadlineSemiBold,
    color: color.muted,
    textTransform: 'capitalize',
  },
  selectedLabel: {
    color: color.textPrimary,
  },
  tabStyle: {
    width: 'auto',
  },
});
