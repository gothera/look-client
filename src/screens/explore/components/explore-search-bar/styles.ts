import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { BORDER_RADIUS, SEARCH_BAR_HEIGHT } from '../../../../res/constants';
import { color, spacing, typography } from '../../../../theme';

interface Style {
  container: ViewStyle;
  placeholderText: TextStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    height: SEARCH_BAR_HEIGHT,
    backgroundColor: color.underground,
    paddingHorizontal: spacing.base,
    marginHorizontal: spacing.base,
    marginTop: spacing.base,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: BORDER_RADIUS,
  },
  placeholderText: {
    ...typography.body,
    color: color.muted,
    marginLeft: spacing.small,
  },
});
