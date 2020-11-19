import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import {  SEARCH_BAR_HEIGHT, STATUS_BAR_HEIGHT } from '../../../../res/constants';
import { color, spacing, typography } from '../../../../theme';

interface Style {
  container: ViewStyle;
  placeholderText: TextStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    height: SEARCH_BAR_HEIGHT,
    backgroundColor: color.background,
    position: 'absolute',
    left: spacing.base,
    right: spacing.base,
    top: STATUS_BAR_HEIGHT + 20,
    paddingHorizontal: spacing.base,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  placeholderText: {
    ...typography.body,
    color: color.muted,
    marginLeft: spacing.small,
  }
});
