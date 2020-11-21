import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { color, spacing, typography } from '../../../../theme';

interface Style {
  container: ViewStyle;
  text: TextStyle;
  selectedText: TextStyle;
  unselectedText: TextStyle;
  postsLabel: TextStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    flexDirection: 'row',
    marginTop: spacing.base,
    marginLeft: spacing.smaller,
  },
  text: {
    ...typography.title1Bold,
    paddingHorizontal: spacing.smaller,
  },
  selectedText: {
    color: color.textSecondary,
  },
  unselectedText: {
    color: color.muted,
  },
  postsLabel: {
    marginLeft: spacing.base,
  },
});
