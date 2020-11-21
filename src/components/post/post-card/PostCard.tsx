import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { POST_CARD_HEIGHT, POST_CARD_WIDTH } from '../../../res/constants';
import PressableCard from '../../pressable-card/PressableCard';

const PostCard = () => {
  return (
    <PressableCard>
      <View
        style={{
          backgroundColor: 'blue',
          width: POST_CARD_WIDTH,
          height: POST_CARD_HEIGHT,
        }}
      >
        <Text>salutare</Text>
      </View>
    </PressableCard>
  );
};

export default PostCard;
