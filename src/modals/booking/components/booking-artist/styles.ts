import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { color, spacing, typography } from '../../../../theme';

interface Style {
  rowContainer: ViewStyle;
  categoryText: TextStyle;
  artistName: TextStyle;
}

export const styles = StyleSheet.create<Style>({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.smaller,
  },
  categoryText: {
    ...typography.bodyRegular,
    color: color.textInverted,
    marginLeft: spacing.smaller,
  },
  artistName: {
    ...typography.bodyBold,
    color: color.textInverted,
  },
});
