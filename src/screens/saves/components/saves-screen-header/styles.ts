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
    paddingLeft: spacing.base,
    flexDirection: 'row',
    marginTop: spacing.base,
  },
  text: {
    ...typography.title1Bold,

  },
  selectedText: {
    color: color.textSecondary,
  },
  unselectedText: {
      color: color.muted
    },
    postsLabel: {
        marginLeft: spacing.base,
    }
});
