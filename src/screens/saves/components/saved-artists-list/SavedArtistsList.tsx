import React from 'react';
import { FlatList } from 'react-native';
import ArtistEntryRow from '../../../../components/artist/artist-entry-row/ArtistEntryRow';
import { Category } from '../../../../types';

/** DUMMY DATA */
interface ArtistAux {
  photo: string;
  fullName: string;
  stars: number;
  reviewsCount: number;
  category: Category;
}

const DUMMY_ARTISTS: ArtistAux[] = [
  {
    photo:
      'https://img.allw.mn/thumbs/r1/jz/ys9jkouk5b73ec52c4689197388259_924x924.jpg',
    fullName: 'Ana Maria',
    stars: 4.9,
    reviewsCount: 129,
    category: Category.Makeup,
  },
  {
    photo:
      'https://1.bp.blogspot.com/-4W8VShiMuiY/XWAMQgI495I/AAAAAAAAio0/e5sHkEGSAKs2tOagU7leTzWBbRl8QwokwCLcBGAs/s1600/ema%2Buta%2Bbiografie%2Bde%2Bstilista%2Btalentata.jpg',
    fullName: 'Ema Uta',
    stars: 5.0,
    reviewsCount: 12100,
    category: Category.Makeup,
  },
  {
    photo: 'https://imgur.com/nf95KqH.png',
    fullName: 'Bogdan Muscălău',
    stars: 4.9,
    reviewsCount: 1000,
    category: Category.Makeup,
  },
  {
    photo: 'https://imgur.com/Lrb9qjl.png',
    fullName: 'Andrei Stanila',
    stars: 4.0,
    reviewsCount: 69,
    category: Category.Makeup,
  },
];

interface OwnProps {
  componentId: string;
}

const SavedArtistsList: React.FC<OwnProps> = ({ componentId }) => {
  const renderArtistRow = ({
    item,
    index,
  }: {
    item: ArtistAux;
    index: number;
  }) => {
    return (
      <ArtistEntryRow
        photo={item.photo}
        fullName={item.fullName}
        stars={item.stars}
        reviewsCount={item.reviewsCount}
        category={item.category}
        onPress={() => {}}
        showDivider={index !== DUMMY_ARTISTS.length - 1}
      />
    );
  };

  return <FlatList data={DUMMY_ARTISTS} renderItem={renderArtistRow} />;
};

export default SavedArtistsList;
