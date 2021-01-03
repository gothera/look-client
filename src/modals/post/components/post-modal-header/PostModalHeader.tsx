import React from 'react';
import { Animated, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import AnimatedHeaderCircleButton from '../../../../components/header/animated-header-circle-button/AnimatedHeaderCircleButton';
import { POST_MODAL_IMAGE_OPACITY_RANGE } from '../../../../res/constants';
import { ChevronLeftIcon, HeartIcon } from '../../../../res/svg';
import PostSaveButton from '../post-save-button/PostSaveButton';
import { styles } from './styles';

interface OwnProps {
  componentId: string;
  scrollY: Animated.Value;
  postId: number;
}

const PostModalHeader: React.FC<OwnProps> = ({
  componentId,
  scrollY,
  postId,
}) => {
  const opacityBackgroundContainer = scrollY.interpolate({
    inputRange: [
      POST_MODAL_IMAGE_OPACITY_RANGE - 100,
      POST_MODAL_IMAGE_OPACITY_RANGE,
    ],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const onBackPress = () => {
    Navigation.dismissModal(componentId);
  };

  return (
    <View style={styles.container}>
      <AnimatedHeaderCircleButton onPress={onBackPress}>
        <ChevronLeftIcon style={{ marginLeft: -2 }} />
      </AnimatedHeaderCircleButton>
      <PostSaveButton postId={postId} />
      <Animated.View
        style={[
          styles.backgroundContainer,
          { opacity: opacityBackgroundContainer },
        ]}
      />
    </View>
  );
};

export default PostModalHeader;
