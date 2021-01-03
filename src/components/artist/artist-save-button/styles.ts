import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface Style {
  container: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    padding: 10,
  },
});
