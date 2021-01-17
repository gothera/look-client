import React from 'react';
import { View, Text } from 'react-native';
import { OfferedService } from '../../../types';
import SmallButton from '../../button/small-button/SmallButton';
import { styles } from './styles';

interface OwnProps {
  offeredService: OfferedService;
  componentId: string;
}

// TODO add currency

const ServiceEntry: React.FC<OwnProps> = ({ offeredService, componentId }) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <View style={styles.leftColumnContainer}>
          <Text style={styles.name} numberOfLines={2}>
            {offeredService.name}
          </Text>
          <Text
            style={styles.subheadline}
          >{`${offeredService.price} RON • ${offeredService.duration} m`}</Text>
        </View>
        <SmallButton onPress={() => {}} title="Book" />
      </View>
    </View>
  );
};

export default ServiceEntry;
