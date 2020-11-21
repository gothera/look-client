import React from 'react';
import { View, Text } from 'react-native';
import { Category } from '../../../types';
import UserCategoryAvatar from '../../avatar/user-category-avatar/UserCategoryAvatar';
import ArtistEntryStats from '../artist-entry-stats/ArtistEntryStats';
import { styles } from './styles';

interface OwnProps {
  photo: string;
  fullName: string;
  stars: number;
  reviewsCount: number;
  onPress?: () => void;
  category: Category;
}

const ArtistEntryRow: React.FC<OwnProps> = ({
  photo,
  fullName,
  stars,
  reviewsCount,
  onPress,
  category,
}) => {
  return (
    <View style={styles.container}>
      <UserCategoryAvatar photo={photo} size={50} category={category} />
      <View style={styles.textContainer}>
        <Text style={styles.fullName}>{fullName}</Text>
        <ArtistEntryStats stars={stars} reviewsCount={reviewsCount} />
      </View>
    </View>
  );
};

export default ArtistEntryRow;
