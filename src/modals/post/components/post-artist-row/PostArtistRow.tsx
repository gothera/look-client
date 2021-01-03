import React from 'react';
import { View } from 'react-native';
import ArtistEntryRow from '../../../../components/artist/artist-entry-row/ArtistEntryRow';
import LineDivider from '../../../../components/ui/LineDivider';
import { pushArtistScreen } from '../../../../navigation';
import { Post } from '../../../../types';

interface OwnProps {
  post: Post;
  componentId: string;
}

const PostArtistRow: React.FC<OwnProps> = ({ post, componentId }) => {
  const {
    artistData: { name, rating, artistPicture, category, reviewsCount },
    artistId,
  } = post;

  const onArtistPress = () => {
    pushArtistScreen(componentId, {
      props: {
        artistId,
      },
    });
  };

  return (
    <View>
      <ArtistEntryRow
        fullName={name}
        stars={rating}
        photo={artistPicture}
        category={category}
        reviewsCount={reviewsCount}
        onPress={onArtistPress}
      />
      <LineDivider />
    </View>
  );
};

export default PostArtistRow;
