import { StyleSheet, TextStyle } from 'react-native';
import { color, typography } from '../../../theme';

interface Style {
  text: TextStyle;
}

export const styles = StyleSheet.create<Style>({
  text: {
    ...typography.footnoteRegular,
    letterSpacing: 0.3,
    color: color.textPrimary,
    marginTop: 4,
  },
});
