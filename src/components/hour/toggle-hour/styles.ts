import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { color, typography } from '../../../theme';

interface Style {
  container: ViewStyle;
  selectedContainer: ViewStyle;
  text: TextStyle;
  selectedText: TextStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 6,
    backgroundColor: color.highlight,
  },
  selectedContainer: {
    backgroundColor: color.background,
    borderWidth: 1,
    borderColor: color.textPrimary,
    paddingVertical: 7,
    paddingHorizontal: 9,
  },
  text: {
    ...typography.bodyRegular,
    color: color.textPrimary,
  },
  selectedText: {},
});
