import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { color } from '../../theme';

interface OwnProps {
  style?: StyleProp<ViewStyle>;
}

const LineDivider: React.FC<OwnProps> = ({ style }) => {
  return <View style={[styles.container, style]} />;
};
interface Style {
  container: ViewStyle;
}
const styles = StyleSheet.create<Style>({
  container: {
    height: 1,
    backgroundColor: color.unchosen,
  },
});

export default LineDivider;
