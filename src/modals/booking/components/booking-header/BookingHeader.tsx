import React from 'react';
import { View, Text } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { useSelector } from 'react-redux';
import { selectArtistById } from '../../../../store/artists/artists.selectors';
import { BookArtistStep } from '../../../../types';
import { darkenColor, getCategoryColor } from '../../../../utils/global';
import BookingArtist from '../booking-artist/BookingArtist';
import BookingHeaderTopbar from '../booking-header-topbar/BookingHeaderTopbar';
import BookingStep from '../booking-step/BookingStep';
import { styles } from './styles';

interface Props {
  artistId: number;
  componentId: string;
  step: BookArtistStep;
  onBack: () => void;
}

const BookingHeader: React.FC<Props> = ({
  artistId,
  componentId,
  step,
  onBack,
}) => {
  const { category, profilePicture, firstName, lastName } = useSelector(
    selectArtistById(artistId),
  );

  const categoryColor = getCategoryColor(category);
  const darkenCategoryColor = darkenColor(categoryColor, -15);

  const dismissModal = () => {
    Navigation.dismissModal(componentId);
  };

  return (
    <View style={[styles.container, { backgroundColor: darkenCategoryColor }]}>
      <View style={styles.contentContainer}>
        <BookingHeaderTopbar
          onClose={dismissModal}
          onBack={onBack}
          showBack={step !== BookArtistStep.Service}
        />
        <BookingArtist
          photo={profilePicture}
          artistName={`${firstName} ${lastName}`}
          category={category}
        />

        <BookingStep step={step} />
      </View>
    </View>
  );
};

export default BookingHeader;
