import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { typography, color } from '../../../theme';

interface Style {
  container: ViewStyle;
  containerDisabled: ViewStyle;
  containerSelected: ViewStyle;
  text: TextStyle;
  disabledText: TextStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 38,
    height: 38,
    borderRadius: 38,
    backgroundColor: color.highlight,
  },
  containerDisabled: {
    backgroundColor: color.background,
  },
  containerSelected: {
    backgroundColor: color.background,
    borderWidth: 1,
    borderColor: color.textPrimary,
  },
  text: {
    ...typography.bodyRegular,
    color: color.textPrimary,
  },
  disabledText: {
    color: color.muted,
  },
});
