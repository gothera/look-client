import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ServiceToggle from '../../../../components/service/service-toggle/ServiceToggle';
import LineDivider from '../../../../components/ui/LineDivider';
import { fetchServicesOfArtist } from '../../../../store/artists/artists.actions';
import { selectArtistById } from '../../../../store/artists/artists.selectors';
import { AsyncDispatch } from '../../../../store/store.types';
import { OfferedService } from '../../../../types';
import ContinueFooter from '../continue-footer/ContinueFooter';
import { styles } from './styles';

interface Props {
  artistId: number;
  onSelectServiceContinue: (serviceId: number, serviceDuration: number) => void;
  initialServiceId: number | undefined;
}

const BookingServices: React.FC<Props> = ({
  artistId,
  onSelectServiceContinue,
  initialServiceId,
}) => {
  const { offeredServices } = useSelector(selectArtistById(artistId));

  const dispatch = useDispatch<AsyncDispatch>();

  const [serviceId, setServiceId] = useState<number | undefined>(
    initialServiceId,
  );

  useEffect(() => {
    dispatch(fetchServicesOfArtist(artistId));
  }, []);

  const renderSelectService = ({ item }: { item: OfferedService }) => {
    const selectService = () => {
      setServiceId(item.id);
    };

    return (
      <ServiceToggle
        name={item.name}
        onPress={selectService}
        isSelected={serviceId === item.id}
        duration={item.duration}
      />
    );
  };

  const serviceDuration =
    offeredServices.filter((offService) => offService.id === serviceId)[0]
      ?.duration || 0;

  const onContinue = () => {
    if (serviceId) {
      onSelectServiceContinue(serviceId, serviceDuration);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={offeredServices}
        renderItem={renderSelectService}
        keyExtractor={(i: OfferedService) => `service-${i.id}`}
        ItemSeparatorComponent={LineDivider}
        contentContainerStyle={styles.listContent}
      />
      <ContinueFooter show={serviceId !== undefined} onContinue={onContinue} />
    </View>
  );
};

export default BookingServices;
