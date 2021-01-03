import React from 'react';
import { View, Text } from 'react-native';
import strings from '../../../res/strings/strings';
import { AppointmentIcon, HeartIcon, RatingStar } from '../../../res/svg';
import { color } from '../../../theme';
import { ArtistStatType } from '../../../types';
import { roundUpNumber } from '../../../utils/global';
import { styles } from './styles';

interface OwnPros {
  type: ArtistStatType;
  count: number;
}

const ArtistStat: React.FC<OwnPros> = ({ type, count }) => {
  const getName = () => {
    switch (type) {
      case 'rate':
        return strings.common.rate;
      case 'appointments':
        return strings.common.appointments;
      case 'saves':
        return strings.common.saves;
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'saves':
        return (
          <HeartIcon
            stroke={color.textPrimary}
            height={14}
            style={{ marginBottom: 2 }}
          />
        );
      case 'appointments':
        return (
          <AppointmentIcon
            stroke={color.textPrimary}
            style={{ marginRight: 4, marginBottom: 2 }}
            height={14}
          />
        );
      case 'rate':
        return (
          <RatingStar
            style={{ marginRight: 2, marginBottom: 2 }}
            stroke={color.textPrimary}
            height={14}
          />
        );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        {getIcon()}
        <Text style={styles.count}>{roundUpNumber(count)}</Text>
      </View>
      <Text style={styles.name}>{getName()}</Text>
    </View>
  );
};

export default ArtistStat;
