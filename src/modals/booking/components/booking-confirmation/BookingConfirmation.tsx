import React from 'react';
import { ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import PrimaryButton from '../../../../components/button/PrimaryButton';
import EntryWithLabel from '../../../../components/entry/entry-with-label/EntryWithLabel';
import FooterOptions from '../../../../components/footer/footer-options/FooterOptions';
import strings from '../../../../res/strings/strings';
import { selectArtistById } from '../../../../store/artists/artists.selectors';
import { LocationType } from '../../../../types';
import {
  datePrittier,
  minutesToPresentedDuration,
} from '../../../../utils/global';
import { styles } from './styles';

interface Props {
  serviceId: number;
  artistId: number;
  selectedLocation: string;
  date: string;
  hour: string;
  onConfirm: () => void;
  isConfirmLoading: boolean;
}

const BookingConfirmation: React.FC<Props> = ({
  serviceId,
  artistId,
  selectedLocation,
  date,
  hour,
  onConfirm,
  isConfirmLoading,
}) => {
  const { offeredServices } = useSelector(selectArtistById(artistId));

  const service = offeredServices.filter(
    (offeredService) => offeredService.id === serviceId,
  )[0];

  // const getLocationName = () => {
  //   switch (selectedLocation) {
  //     case LocationType.Artist:
  //       return 'Artist Location';
  //     case LocationType.Client:
  //       return 'Your Location';
  //   }
  // };

  return (
    <>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <EntryWithLabel
          label={'Service'}
          name={service.name}
          rightText={minutesToPresentedDuration(service.duration)}
        />
        <EntryWithLabel label={'Description'} name={service.description} />
        <EntryWithLabel label={'Date'} name={datePrittier(date)} />
        <EntryWithLabel label={'Hour'} name={hour} />
        <EntryWithLabel label={'Location'} name={selectedLocation} />
      </ScrollView>
      <FooterOptions contentContainerStyle={{ alignItems: 'center' }}>
        <PrimaryButton
          onPress={onConfirm}
          title={strings.action.confirmAndBook}
          isLoading={isConfirmLoading}
        />
      </FooterOptions>
    </>
  );
};

export default BookingConfirmation;
