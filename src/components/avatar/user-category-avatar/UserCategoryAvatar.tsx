import React from 'react';
import { View } from 'react-native';
import { color } from '../../../theme';
import { Category } from '../../../types';
import UserAvatar from '../user-avatar/UserAvatar';

interface OwnProps {
  size: number;
  photo: string;
  category: Category;
}

const UserCategoryAvatar: React.FC<OwnProps> = ({ size, photo, category }) => {
  const getBorderColor = () => {
    switch (category) {
      case Category.Makeup:
        return color.makeup;
      case Category.Lashes:
        return color.lashes;
      case Category.Eyebrows:
        return color.eyebrows;
      case Category.Nails:
        return color.nails;
      case Category.BodyCare:
        return color.bodyCare;
      case Category.Hair:
        return color.hair;
    }
  };

  return (
    <View
      style={{
        borderWidth: 1.2,
        width: size + 6,
        height: size + 6,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: size + 6,
        borderColor: getBorderColor(),
      }}
    >
      <UserAvatar photoUrl={photo} size={size} />
    </View>
  );
};

export default UserCategoryAvatar;
