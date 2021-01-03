import React from 'react';
import { View, Text } from 'react-native';
import ArtistEntryRow from '../../../../components/artist/artist-entry-row/ArtistEntryRow';
import LineDivider from '../../../../components/ui/LineDivider';
import { Post } from '../../../../types';

interface OwnProps {
  post: Post;
}

const PostArtistRow: React.FC<OwnProps> = ({ post }) => {
  const {
    artistData: { name, rating, artistPicture, category, reviewsCount },
  } = post;
  return (
    <View>
      <ArtistEntryRow
        fullName={name}
        stars={rating}
        photo={artistPicture}
        category={category}
        reviewsCount={reviewsCount}
      />
      <LineDivider />
    </View>
  );
};

export default PostArtistRow;
