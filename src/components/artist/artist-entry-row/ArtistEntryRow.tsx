import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { color } from '../../../theme';
import { Category } from '../../../types';
import UserCategoryAvatar from '../../avatar/user-category-avatar/UserCategoryAvatar';
import LineDivider from '../../ui/LineDivider';
import ArtistEntryStats from '../artist-entry-stats/ArtistEntryStats';
import { styles } from './styles';

interface OwnProps {
  photo: string;
  fullName: string;
  stars: number;
  reviewsCount: number;
  onPress?: () => void;
  category: Category;
  showDivider?: boolean;
}

const ArtistEntryRow: React.FC<OwnProps> = ({
  photo,
  fullName,
  stars,
  reviewsCount,
  onPress,
  category,
  showDivider,
}) => {
  return (
    <TouchableHighlight onPress={onPress} underlayColor={color.highlight}>
      <>
        <View style={styles.container}>
          <UserCategoryAvatar photo={photo} size={50} category={category} />
          <View style={styles.textContainer}>
            <Text style={styles.fullName}>{fullName}</Text>
            <ArtistEntryStats stars={stars} reviewsCount={reviewsCount} />
          </View>
        </View>
        {showDivider && <LineDivider style={styles.divider} />}
      </>
    </TouchableHighlight>
  );
};

export default ArtistEntryRow;
