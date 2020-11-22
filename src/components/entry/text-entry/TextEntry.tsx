import React from 'react';
import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
  TouchableHighlight,
} from 'react-native';
import { styles } from './styles';
import LineDivider from '../../ui/LineDivider';
import { color } from '../../../theme';

interface OwnProps {
  containerStyle?: StyleProp<ViewStyle>;
  title: string;
  onPress: () => void;
  titleStyle?: StyleProp<TextStyle>;
  dividerStyle?: StyleProp<ViewStyle>;
}

const TextEntry: React.FC<OwnProps> = ({
  containerStyle,
  title,
  onPress,
  titleStyle,
  dividerStyle,
}) => {
  return (
    <View style={styles.root}>
      <TouchableHighlight
        style={[styles.container, containerStyle]}
        onPress={onPress}
        underlayColor={color.highlight}
      >
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      </TouchableHighlight>
      <LineDivider style={dividerStyle} />
    </View>
  );
};

export default TextEntry;
