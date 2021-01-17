import React, { useRef } from 'react';
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
  Animated,
  View,
} from 'react-native';
import { DotIndicator } from 'react-native-indicators';
import { color, typography } from '../../theme';

interface OwnProps {
  containerStyle?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
  onPress: () => void;
  title: string;
  isDisabled?: boolean;
  isLoading?: boolean;
}

const PrimaryButton: React.FC<OwnProps> = ({
  containerStyle,
  onPress,
  title,
  isDisabled,
  textStyles,
  isLoading,
}) => {
  const scale = useRef(new Animated.Value(1)).current;

  const onPressIn = () => {
    Animated.timing(scale, {
      toValue: 0.95,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.timing(scale, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View
      style={[
        styles.container,
        containerStyle,
        { transform: [{ scale: scale }] },
        isDisabled && styles.disabled,
      ]}
    >
      <Pressable
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onPress={onPress}
        disabled={isDisabled || isLoading}
      >
        {isLoading ? (
          <View style={{ alignItems: 'center' }}>
            <DotIndicator color={color.textInverted} size={5} />
          </View>
        ) : (
          <Text style={[styles.text, textStyles]}>{title}</Text>
        )}
      </Pressable>
    </Animated.View>
  );
};

interface Style {
  container: ViewStyle;
  text: TextStyle;
  disabled: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 12,
    backgroundColor: color.brand,
    height: 44,
  },
  text: {
    ...typography.bodySemiBold,
    color: color.textInverted,
    paddingBottom: 16,
    paddingTop: 16,
    textAlign: 'center',
  },
  disabled: {
    backgroundColor: color.unchosen,
  },
});

export default PrimaryButton;
