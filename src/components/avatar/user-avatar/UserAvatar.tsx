import React, { useState } from 'react';
import { StyleProp } from 'react-native';
import FastImage, { ImageStyle } from 'react-native-fast-image';

const WOMAN_AVATAR_PLACEHOLDER = require('../../../res/images/placeholders/woman-avatar-placeholder.png');

interface OwnProps {
  size: number;
  style?: StyleProp<ImageStyle>;
  photoUrl?: string;
}

const UserAvatar: React.FC<OwnProps> = ({ size, style, photoUrl }) => {
  const [isError, setIsError] = useState(false);

  const onImageError = () => {
    setIsError(true);
  };

  return (
    <FastImage
      source={
        photoUrl && !isError ? { uri: photoUrl } : WOMAN_AVATAR_PLACEHOLDER
      }
      style={[{ width: size, height: size, borderRadius: size }, style]}
      onError={onImageError}
    />
  );
};

export default UserAvatar;
