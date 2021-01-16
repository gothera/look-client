import React from 'react';
import { StyleProp, Text, View, ViewStyle } from 'react-native';
import strings from '../../../res/strings/strings';
import { styles } from './styles';
interface Props {
  style?: StyleProp<ViewStyle>;
}
export const ChipCancelled: React.FC<Props> = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.cancelledContainer}>
        <Text style={styles.cancelledText}>{strings.chip.cancelled}</Text>
      </View>
    </View>
  );
};
