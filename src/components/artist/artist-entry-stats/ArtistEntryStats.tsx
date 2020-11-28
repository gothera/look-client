import React from 'react';
import { Text } from 'react-native';
import { roundUpNumber } from '../../../utils/global';
import { styles } from './styles';

interface OwnProps {
  stars: number;
  reviewsCount: number;
}

const ArtistEntryStats: React.FC<OwnProps> = ({ stars, reviewsCount }) => {
  return (
    <Text style={styles.text}>{`${stars} stars • ${roundUpNumber(
      reviewsCount,
    )} reviews`}</Text>
  );
};

export default ArtistEntryStats;
