import React from 'react';
import { Animated, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { POST_MODAL_IMAGE_OPACITY_RANGE } from '../../../../res/constants';
import { styles } from './styles';

interface OwnProps {
  scrollY: Animated.Value;
  photos: string[];
}

const PostModalImages: React.FC<OwnProps> = ({ scrollY, photos }) => {
  const opacityOverlayContainer = scrollY.interpolate({
    inputRange: [0, POST_MODAL_IMAGE_OPACITY_RANGE],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.opacityOverlay, { opacity: opacityOverlayContainer }]}
      />
      <FastImage
        source={{ uri: photos[0] }}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
};

export default PostModalImages;
