import React from 'react';
import { View, Text, StyleProp, ViewStyle } from 'react-native';
import { Category } from '../../../types';
import UserCategoryAvatar from '../../avatar/user-category-avatar/UserCategoryAvatar';

interface OwnProps {
  style?: StyleProp<ViewStyle>;
  photo: string;
  category: Category;
  fullName: string;
}

const PostCardArtistData: React.FC<OwnProps> = ({ style, photo, category }) => {
  return (
    <View style={style}>
      <UserCategoryAvatar photo={photo} category={category} size={24} />
    </View>
  );
};

export default PostCardArtistData;
