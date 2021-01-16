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
  leftIcon?: JSX.Element;
}

const TextEntry: React.FC<OwnProps> = ({
  containerStyle,
  title,
  onPress,
  titleStyle,
  dividerStyle,
  leftIcon,
}) => {
  return (
    <View style={styles.root}>
      <TouchableHighlight onPress={onPress} underlayColor={color.highlight}>
        <View style={[styles.container, containerStyle]}>
          {leftIcon && <View style={styles.leftIconContainer}>{leftIcon}</View>}
          <Text style={[styles.title, titleStyle]}>{title}</Text>
        </View>
      </TouchableHighlight>
      <LineDivider style={dividerStyle} />
    </View>
  );
};

export default TextEntry;
