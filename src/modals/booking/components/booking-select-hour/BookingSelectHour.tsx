import React from 'react';
import { View, Text } from 'react-native';
import HoursCarousel from '../../../../components/hour/hours-carousel/HoursCarousel';
import { FreeIntervalHoursApi } from '../../../../services/api/api.types';
import { intervalParser } from '../../../../utils/hour-utils';
import { styles } from './styles';

interface Props {
  freeIntervalHours: FreeIntervalHoursApi;
  onSelectHour: (hour: string) => void;
  selectedHour?: string;
  serviceDuration: number;
}

const BookingSelectHour: React.FC<Props> = ({
  freeIntervalHours,
  onSelectHour,
  selectedHour,
  serviceDuration,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose hour</Text>
      <HoursCarousel
        startHours={intervalParser(
          freeIntervalHours.freeSpots,
          serviceDuration,
        )}
        onSelectHour={onSelectHour}
        selectedHour={selectedHour}
      />
    </View>
  );
};

export default BookingSelectHour;
