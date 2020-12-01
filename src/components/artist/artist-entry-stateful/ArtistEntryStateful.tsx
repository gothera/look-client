import React from 'react';
import { View, Text } from 'react-native';
import { connect, ConnectedProps } from 'react-redux';
import { selectArtistById } from '../../../store/artists/artists.selectors';
import { StoreState } from '../../../store/store.types';
import ArtistEntryRow from '../artist-entry-row/ArtistEntryRow';

interface OwnProps {
  artistId: number;
  onPress: () => void;
  showDivider?: boolean;
}

const mapStateToProps = (state: StoreState, ownProps: OwnProps) => {
  const { artistId } = ownProps;
  const artist = selectArtistById(artistId)(state);
  return {
    artist,
  };
};

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const ArtistEntryStateful: React.FC<OwnProps & PropsFromRedux> = ({
  onPress,
  showDivider,
  artist,
}) => {
  const {
    profilePicture,
    firstName,
    lastName,
    rating,
    reviewsCount,
    category,
  } = artist;

  return (
    <ArtistEntryRow
      fullName={`${firstName} ${lastName}`}
      photo={profilePicture}
      stars={rating}
      category={category}
      reviewsCount={reviewsCount}
      onPress={onPress}
      showDivider={showDivider}
    />
  );
};

export default connector(ArtistEntryStateful) as React.FC<OwnProps>;
