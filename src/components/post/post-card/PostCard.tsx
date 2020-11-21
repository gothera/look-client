import React from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Category } from '../../../types';
import PressableCard from '../../pressable-card/PressableCard';
import PostCardArtistData from '../post-card-artist-data/PostCardArtistData';
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
        <PostCardArtistData
          style={{ position: 'absolute', bottom: 10, left: 10 }}
          photo={artistPhoto}
          category={category}
          fullName={artistFullName}
        />
      </View>
    </PressableCard>
  );
};

export default PostCard;
