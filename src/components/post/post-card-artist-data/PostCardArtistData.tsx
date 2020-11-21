import React from 'react';
import { View, StyleProp, ViewStyle, Text } from 'react-native';
import { Category } from '../../../types';
import UserCategoryAvatar from '../../avatar/user-category-avatar/UserCategoryAvatar';
import { styles } from './styles';

interface OwnProps {
  style?: StyleProp<ViewStyle>;
  photo: string;
  category: Category;
  fullName: string;
}

const PostCardArtistData: React.FC<OwnProps> = ({
  style,
  photo,
  category,
  fullName,
}) => {
  return (
    <View style={[styles.container, style]}>
      <UserCategoryAvatar photo={photo} category={category} size={24} />
      <Text style={styles.name}>{fullName}</Text>
    </View>
  );
};

export default PostCardArtistData;
