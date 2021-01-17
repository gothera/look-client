import React from 'react';
import { Text, StyleProp, ViewStyle, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface Props {
  hour: string;
  isSelected: boolean;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
}

const ToggleHour: React.FC<Props> = ({ hour, isSelected, style, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, isSelected && styles.selectedContainer, style]}
    >
      <Text style={[styles.text, isSelected && styles.selectedText]}>
        {hour}
      </Text>
    </TouchableOpacity>
  );
};

export default ToggleHour;
