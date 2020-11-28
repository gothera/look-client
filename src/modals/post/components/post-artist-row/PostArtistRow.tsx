import React from 'react';
import { View, Text } from 'react-native';
import ArtistEntryRow from '../../../../components/artist/artist-entry-row/ArtistEntryRow';
import LineDivider from '../../../../components/ui/LineDivider';
import { Category } from '../../../../types';

const PostArtistRow = () => {
  return (
    <View>
      <ArtistEntryRow
        fullName={'Ema Uta'}
        stars={5}
        photo={
          'https://1.bp.blogspot.com/-4W8VShiMuiY/XWAMQgI495I/AAAAAAAAio0/e5sHkEGSAKs2tOagU7leTzWBbRl8QwokwCLcBGAs/s1600/ema%2Buta%2Bbiografie%2Bde%2Bstilista%2Btalentata.jpg'
        }
        category={Category.Makeup}
        reviewsCount={1200023}
      />
      <LineDivider />
    </View>
  );
};

export default PostArtistRow;
