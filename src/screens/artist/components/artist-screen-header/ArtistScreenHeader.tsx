import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import UserCategoryAvatar from '../../../../components/avatar/user-category-avatar/UserCategoryAvatar';
import { selectArtistById } from '../../../../store/artists/artists.selectors';
import ArtistDetails from '../artist-details/ArtistDetails';
import ArtistStatsRow from '../artist-stats-row/ArtistStatsRow';
import { styles } from './styles';

interface OwnProps {
  artistId: number;
}

const ArtistScreenHeader: React.FC<OwnProps> = ({ artistId }) => {
  const artist = useSelector(selectArtistById(artistId));

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <UserCategoryAvatar
          category={artist.category}
          size={72}
          photo={artist.profilePicture}
        />
        <ArtistStatsRow
          rate={artist.rating}
          saves={artist.saves}
          appointments={artist.appointmentsCount}
        />
      </View>
      <ArtistDetails
        firstName={artist.firstName}
        lastName={artist.lastName}
        category={artist.category}
        bio={artist.bio}
        artistId={artistId}
        address={artist.address}
      />
    </View>
  );
};

export default ArtistScreenHeader;
