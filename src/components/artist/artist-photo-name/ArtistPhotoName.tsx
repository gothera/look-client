import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { Category } from '../../../types';
import UserCategoryAvatar from '../../avatar/user-category-avatar/UserCategoryAvatar';
import { styles } from './styles';

interface Props {
  name: string;
  photo?: string;
  category: Category;
  onPress?: () => void;
}

const ArtistPhotoName: React.FC<Props> = ({
  name,
  photo,
  category,
  onPress,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <UserCategoryAvatar photo={photo} size={50} category={category} />
        <Text style={styles.fullName}>{name}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ArtistPhotoName;
