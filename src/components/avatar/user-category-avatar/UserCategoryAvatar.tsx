import React from 'react';
import { View } from 'react-native';
import { Category } from '../../../types';
import { getCategoryColor } from '../../../utils/global';
import UserAvatar from '../user-avatar/UserAvatar';

interface OwnProps {
  size: number;
  photo?: string;
  category: Category;
}

const UserCategoryAvatar: React.FC<OwnProps> = ({ size, photo, category }) => {
  const categoryColor = getCategoryColor(category);

  return (
    <View
      style={{
        borderWidth: 1.2,
        width: size + 6,
        height: size + 6,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: size + 6,
        borderColor: categoryColor,
      }}
    >
      <UserAvatar photoUrl={photo} size={size} />
    </View>
  );
};

export default UserCategoryAvatar;
