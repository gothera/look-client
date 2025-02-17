import React from 'react';
import { View, Text } from 'react-native';
import ArtistSaveButton from '../../../../components/artist/artist-save-button/ArtistSaveButton';
import { Category } from '../../../../types';
import { categoryEnumToStr } from '../../../../utils/global';
import { styles } from './styles';

interface OwnProps {
  firstName: string;
  lastName: string;
  category: Category;
  bio: string;
  artistId: number;
  address: string;
}

const ArtistDetails: React.FC<OwnProps> = ({
  firstName,
  lastName,
  category,
  bio,
  artistId,
  address
}) => {
  const fullName = firstName + ' ' + lastName;

  const categoryArtist = categoryEnumToStr(category) + ' ' + 'Artist';

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <View>
          <Text style={styles.fullName}>{fullName}</Text>
          <Text style={styles.categoryText}>{categoryArtist}</Text>
        </View>
        <ArtistSaveButton artistId={artistId} />
      </View>
      <Text style={styles.bio}>{bio}</Text>
      <Text style={styles.address}>Address: {address}</Text>

    </View>
  );
};

export default ArtistDetails;
