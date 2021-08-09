import React from 'react';
import { View, Text } from 'react-native';
import MapContainer from '../../../../components/map/map-container/MapContainer';
import LineDivider from '../../../../components/ui/LineDivider';
import { LocationType } from '../../../../types';
import { styles } from './styles';

interface Props {
  latitude: string;
  longitude: string;
  locationType: string;
}

const AppointmentLocationEntry: React.FC<Props> = ({
  latitude,
  longitude,
  locationType,
}) => {

  // const getNameType = () => {
  //   switch (locationType) {
  //     case LocationType.Artist:
  //       return "Artist's address";
  //     case LocationType.Client:
  //       return 'Your address';
  //   }
  // };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Location</Text>
      <View style={styles.textContainer}>
        <Text style={styles.addressType}>{locationType}</Text>
        {/* <MapContainer
          style={styles.map}
          latitude={latitude}
          longitude={longitude}
        /> */}
      </View>
      <LineDivider />
    </View>
  );
};

export default AppointmentLocationEntry;
