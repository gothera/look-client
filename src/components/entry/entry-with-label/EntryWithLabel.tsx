import React from 'react';
import { View, Text, StyleProp, ViewStyle } from 'react-native';
import LineDivider from '../../ui/LineDivider';
import { styles } from './styles';

interface Props {
  label: string;
  name: string;
  rightText?: string;
  style?: StyleProp<ViewStyle>;
}

const EntryWithLabel: React.FC<Props> = ({ label, name, rightText, style }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.rowContainer}>
        <Text style={styles.name}>{name}</Text>
        {rightText && <Text style={styles.rightText}>{rightText}</Text>}
      </View>
      <LineDivider />
    </View>
  );
};

export default EntryWithLabel;
