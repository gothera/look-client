import React from 'react';
import { View, Text } from 'react-native';
import ArtistStat from '../../../../components/artist/artist-stat/ArtistStat';
import { styles } from './styles';

interface OwnProps {
  rate: number;
  saves: number;
  appointments: number;
}

const ArtistStatsRow: React.FC<OwnProps> = ({ rate, saves, appointments }) => {
  return (
    <View style={styles.rowContainer}>
      <ArtistStat type={'rate'} count={rate} />
      <ArtistStat type={'saves'} count={saves} />
      <ArtistStat type={'appointments'} count={appointments} />
    </View>
  );
};

export default ArtistStatsRow;
