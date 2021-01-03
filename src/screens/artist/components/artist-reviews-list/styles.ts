import { StyleSheet, ViewStyle } from 'react-native';
import { spacing } from '../../../../theme';

interface Style {
  headerContainer: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  headerContainer: {
    marginBottom: spacing.large,
    marginTop: spacing.smaller,
  },
});
