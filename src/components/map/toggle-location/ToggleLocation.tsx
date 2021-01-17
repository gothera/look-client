import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import { View, Text } from 'react-native';
import LineDivider from '../../ui/LineDivider';
import MapContainer from '../map-container/MapContainer';
import { styles } from './styles';

interface Props {
  name: string;
  latitude: string;
  longitude: string;
  onSelect: () => void;
  isSelected: boolean;
}

const ToggleLocation: React.FC<Props> = ({
  name,
  latitude,
  longitude,
  onSelect,
  isSelected,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <CheckBox
          disabled={false}
          value={isSelected}
          onValueChange={onSelect}
        />

        <Text style={styles.name}>{name}</Text>
      </View>
      <MapContainer
        latitude={latitude}
        longitude={longitude}
        style={styles.mapContainer}
      />
      <LineDivider />
    </View>
  );
};

export default ToggleLocation;
