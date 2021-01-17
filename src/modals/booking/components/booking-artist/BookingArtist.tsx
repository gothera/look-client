import React from 'react';
import { View, Text } from 'react-native';
import UserAvatar from '../../../../components/avatar/user-avatar/UserAvatar';
import { Category } from '../../../../types';
import { categoryEnumToStr } from '../../../../utils/global';
import { styles } from './styles';

interface Props {
  artistName: string;
  photo?: string;
  category: Category;
}

const BookingArtist: React.FC<Props> = ({ artistName, photo, category }) => {
  const categoryNamed = categoryEnumToStr(category);

  return (
    <View style={styles.rowContainer}>
      <UserAvatar size={36} photoUrl={photo} />
      <Text style={styles.categoryText}>
        {`${categoryNamed}, `}
        <Text style={styles.artistName}>{artistName}</Text>
      </Text>
    </View>
  );
};

export default BookingArtist;
