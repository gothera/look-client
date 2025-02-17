import { StyleSheet, ViewStyle } from 'react-native';
import { STATUS_BAR_HEIGHT } from '../../res/constants';
import { color } from '../../theme';

interface Style {
  container: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: color.background,
    marginTop: STATUS_BAR_HEIGHT,
  },
});
