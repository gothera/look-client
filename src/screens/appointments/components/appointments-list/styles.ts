import { StyleSheet, ViewStyle } from 'react-native';

interface Style {
  list: ViewStyle;
  containerList: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  list: {
    height: '100%',
    width: '100%',
  },
  containerList: {},
});
