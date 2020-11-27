import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { CATEGORIES_GRID_COLUMNS } from '../../../../res/constants';
import { color, spacing, typography } from '../../../../theme';

interface Style {
  container: ViewStyle;
  label: TextStyle;
  categoryCardContainer: ViewStyle;
  firstColumnCategory: ViewStyle;
  lastColumnCategory: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    marginTop: spacing.largest,
    marginHorizontal: spacing.base,
  },
  label: {
    ...typography.body,
    color: color.textPrimary,
    marginBottom: spacing.base,
  },
  categoryCardContainer: {
    flex: 1 / CATEGORIES_GRID_COLUMNS,
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstColumnCategory: {
    alignItems: 'flex-start',
  },
  lastColumnCategory: {
    alignItems: 'flex-end',
  },
});
