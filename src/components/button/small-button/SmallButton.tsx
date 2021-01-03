import React from 'react';
import { View, Text, StyleProp, ViewStyle } from 'react-native';
import PressableCard from '../../pressable-card/PressableCard';
import { styles } from './styles';

interface OwnProps {
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
  title: string;
}

const SmallButton: React.FC<OwnProps> = ({ style, onPress, title }) => {
  return (
    <PressableCard onPress={onPress}>
      <View style={[styles.container, style]}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </PressableCard>
  );
};

export default SmallButton;
