import React, { useState } from 'react';
import { View } from 'react-native';
import { Navigation, NavigationComponentProps } from 'react-native-navigation';
import { useSelector } from 'react-redux';
import { postAppointment } from '../../services/api/AppointmentService';
import { StoreState } from '../../store/store.types';
import { BookArtistStep, LocationType } from '../../types';
import BookingConfirmation from './components/booking-confirmation/BookingConfirmation';
import BookingHeader from './components/booking-header/BookingHeader';
import BookingLocation from './components/booking-location/BookingLocation';
import BookingServices from './components/booking-services/BookingServices';
import BookingTime from './components/booking-time/BookingTime';
import { styles } from './styles';

interface Props {
  artistId: number;
}

const BookingModal: React.FC<NavigationComponentProps & Props> = ({
  componentId,
  artistId,
}) => {
  const [step, setStep] = useState<BookArtistStep>(BookArtistStep.Service);

  const [isConfirmLoading, setIsConfirmLoading] = useState(false);

  const [selectedService, setSelectedService] = useState<{
    id: number;
    duration: number;
  }>();

  const [time, setTime] = useState<{ date: string; startingHour: string }>();

  const [location, setLocation] = useState<LocationType>();

  const clientId = useSelector((state: StoreState) => state.profile.clientId);

  const onSelectServiceId = (id: number, duration: number) => {
    setSelectedService({ id, duration });
    setStep(BookArtistStep.Date);
  };

  const onSelectTime = (day: string, hour: string) => {
    setTime({ date: day, startingHour: hour });
    setStep(BookArtistStep.Location);
  };

  const onSelectLocation = (loc: LocationType) => {
    setLocation(loc);
    setStep(BookArtistStep.Confirmation);
  };

  const onBackStep = () => {
    switch (step) {
      case BookArtistStep.Service:
        break;
      case BookArtistStep.Date:
        setStep(BookArtistStep.Service);
        break;
      case BookArtistStep.Location:
        setStep(BookArtistStep.Date);
        break;
      case BookArtistStep.Confirmation:
        setStep(BookArtistStep.Location);
        break;
    }
  };

  const onConfirm = () => {
    if (
      clientId === undefined ||
      selectedService === undefined ||
      time === undefined
    ) {
      return;
    }

    setIsConfirmLoading(true);
    postAppointment({
      artistId,
      clientId,
      serviceId: selectedService.id,
      date: time.date,
      startingTime: time.startingHour,
    })
      .then(() => {
        setTimeout(() => {
          Navigation.dismissModal(componentId);
        }, 500);
      })
      .catch((err) => {
        console.error('post appointment error', err);
      })
      .finally(() => {
        setIsConfirmLoading(false);
      });
  };

  const renderStep = () => {
    switch (step) {
      case BookArtistStep.Service:
        return (
          <BookingServices
            artistId={artistId}
            onSelectServiceContinue={onSelectServiceId}
            initialServiceId={selectedService?.id}
          />
        );
      case BookArtistStep.Date:
        return (
          <BookingTime
            artistId={artistId}
            serviceDuration={selectedService?.duration || 30}
            onSelectTimeContinue={onSelectTime}
          />
        );
      case BookArtistStep.Location:
        return (
          <BookingLocation
            artistId={artistId}
            onSelectLocationContinue={onSelectLocation}
          />
        );
      case BookArtistStep.Confirmation:
        return (
          <BookingConfirmation
            artistId={artistId}
            serviceId={selectedService?.id || 0}
            selectedLocation={location || LocationType.Artist}
            hour={time?.startingHour || ''}
            date={time?.date || ''}
            onConfirm={onConfirm}
            isConfirmLoading={isConfirmLoading}
          />
        );
    }
  };

  return (
    <View style={styles.container}>
      <BookingHeader
        artistId={artistId}
        componentId={componentId}
        step={step}
        onBack={onBackStep}
      />
      {renderStep()}
    </View>
  );
};

export default BookingModal;
