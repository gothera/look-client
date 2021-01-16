import React from 'react';
import { View, Text, Animated } from 'react-native';
import LineDivider from '../../ui/LineDivider';
import { styles } from './styles';

interface OwnProps {
  title: string;
  scrollY?: Animated.Value;
  rightButton?: JSX.Element;
}

const TopBarLeftAlignment: React.FC<OwnProps> = ({
  title,
  scrollY,
  rightButton,
}) => {
  const dividerOpacity = scrollY?.interpolate({
    inputRange: [0, 10],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        {rightButton}
      </View>
      <Animated.View
        style={scrollY !== undefined && { opacity: dividerOpacity }}
      >
        <LineDivider />
      </Animated.View>
    </>
  );
};

export default TopBarLeftAlignment;
