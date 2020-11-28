import React from 'react';
import { Animated, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { POST_MODAL_IMAGE_OPACITY_RANGE } from '../../../../res/constants';
import { styles } from './styles';

const photo = 'https://imgur.com/nf95KqH.png';

interface OwnProps {
  scrollY: Animated.Value;
}

const PostModalImages: React.FC<OwnProps> = ({ scrollY }) => {
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
        source={{ uri: photo }}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
};

export default PostModalImages;
