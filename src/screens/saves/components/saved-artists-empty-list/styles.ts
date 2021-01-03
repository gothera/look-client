import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { spacing, typography } from '../../../../theme';

interface Style {
  container: ViewStyle;
  text: TextStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: spacing.extraLarge,
  },
  text: {
    ...typography.body,
    textAlign: 'center',
    marginHorizontal: 30,
  },
});
