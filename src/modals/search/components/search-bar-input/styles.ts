import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { BORDER_RADIUS, SEARCH_BAR_HEIGHT } from '../../../../res/constants';
import { color, spacing, typography } from '../../../../theme';

interface Style {
  container: ViewStyle;
  inputContainer: ViewStyle;
  cancelContainer: ViewStyle;
  cancelText: TextStyle;
  input: TextStyle;
}

export const styles = StyleSheet.create<Style>({
  inputContainer: {
    height: SEARCH_BAR_HEIGHT,
    backgroundColor: color.underground,
    paddingHorizontal: spacing.base,
    marginLeft: spacing.base,
    marginRight: spacing.smaller,
    marginTop: spacing.base,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: BORDER_RADIUS,
    flexGrow: 1,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: spacing.small,
  },
  cancelContainer: {
    marginTop: 12,
    padding: 8,
    marginRight: 8,
  },
  cancelText: {
    ...typography.subheadline,
    color: color.textPrimary,
  },
  input: {
    marginLeft: spacing.small,
    flex: 1,
    marginRight: spacing.base,
    ...typography.body,
    color: color.textPrimary,
    letterSpacing: 0.2,
  },
});
