import React from 'react';
import { View, Text, StyleProp, ViewStyle } from 'react-native';
import FastImage from 'react-native-fast-image';
import { POST_CARD_HEIGHT, POST_CARD_WIDTH } from '../../../res/constants';
import { Category } from '../../../types';
import PressableCard from '../../pressable-card/PressableCard';
import { styles } from './styles';

interface OwnProps {
  photo: string;
  artistFullName: string;
  artistPhoto: string;
  category: Category;
  style?: StyleProp<ViewStyle>;
}

const PostCard: React.FC<OwnProps> = ({
  photo,
  artistFullName,
  artistPhoto,
  category,
  style,
}) => {
  return (
    <PressableCard onPress={() => {}}>
      <View style={[styles.container, style]}>
        <FastImage source={{ uri: photo }} style={styles.imageStyle} />
      </View>
    </PressableCard>
  );
};

export default PostCard;
