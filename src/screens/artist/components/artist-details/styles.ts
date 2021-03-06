import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { color, spacing, typography } from '../../../../theme';

interface Style {
  container: ViewStyle;
  fullName: TextStyle;
  categoryText: TextStyle;
  bio: TextStyle;
  rowContainer: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    marginTop: spacing.small,
  },
  fullName: {
    ...typography.headlineSemiBold,
    color: color.textPrimary,
  },
  categoryText: {
    ...typography.caption1Regular,
    color: color.muted,
    marginTop: 4,
  },
  bio: {
    ...typography.subheadlineRegular,
    color: color.textPrimary,
    marginTop: spacing.base,
    lineHeight: 18,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
