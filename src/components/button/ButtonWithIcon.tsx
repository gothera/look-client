import React from 'react';
import {
  StyleSheet,
  Text,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  TextStyle,
  View,
} from 'react-native';
import { color, typography } from '../../theme';
import PressableCard from '../pressable-card/PressableCard';

interface OwnProps {
  containerStyle?: StyleProp<ViewStyle>;
  onPress: () => void;
  title: string;
  icon: JSX.Element;
}

const ButtonWithIcon: React.FC<OwnProps> = ({
  containerStyle,
  onPress,
  title,
  icon,
}) => {
  return (
    <View style={containerStyle}>
      <PressableCard onPress={onPress}>
        <View style={[styles.container]}>
          <View style={styles.iconContainer}>{icon}</View>
          <Text style={styles.text}>{title}</Text>
        </View>
      </PressableCard>
    </View>
  );
};

interface Style {
  container: ViewStyle;
  text: TextStyle;
  iconContainer: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 12,
    backgroundColor: color.textInverted,
    borderWidth: 0.5,
    borderColor: color.textPrimary,
  },
  text: {
    ...typography.bodySemiBold,
    color: color.textPrimary,
    paddingBottom: 16,
    paddingTop: 16,
    textAlign: 'center',
  },
  iconContainer: {
    position: 'absolute',
    left: 0,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
});

export default ButtonWithIcon;
