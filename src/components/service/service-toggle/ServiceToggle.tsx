import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { styles } from './styles';
import CheckBox from '@react-native-community/checkbox';
import { minutesToPresentedDuration } from '../../../utils/global';

interface Props {
  onPress: () => void;
  name: string;
  isSelected: boolean;
  duration: number;
}

const ServiceToggle: React.FC<Props> = ({
  onPress,
  name,
  isSelected,
  duration,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <CheckBox disabled={false} value={isSelected} onValueChange={onPress} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.duration}>
            {minutesToPresentedDuration(duration)}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ServiceToggle;
