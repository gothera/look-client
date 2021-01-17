import React, { useRef, useState } from 'react';
import { Text, Animated } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ArtistPhotoName from '../../../../components/artist/artist-photo-name/ArtistPhotoName';
import EntryWithLabel from '../../../../components/entry/entry-with-label/EntryWithLabel';
import TextEntry from '../../../../components/entry/text-entry/TextEntry';
import { pushArtistScreen } from '../../../../navigation';
import strings from '../../../../res/strings/strings';
import { selectAppointmentById } from '../../../../store/appointments/appointments.selectors';
import AppointmentLocationEntry from '../appointment-location-entry/AppointmentLocationEntry';
import { styles } from './styles';
import { cancelAppointment } from '../../../../store/appointments/appointments.actions';
import { ChipCancelled } from '../../../../components/chip/chip-cancelled/ChipCancelled';
import { AsyncDispatch } from '../../../../store/store.types';
import {
  categoryEnumToStr,
  datePrittier,
  hourPrittier,
  minutesToPresentedDuration,
} from '../../../../utils/global';
import AppointmentContactEntry from '../appointment-contact-entry/AppointmentContactEntry';
import dayjs from 'dayjs';

interface Props {
  appointmentId: number;
  scrollY: Animated.Value;
  componentId: string;
}

const AppointmentScrollData: React.FC<Props> = ({
  appointmentId,
  scrollY,
  componentId,
}) => {
  const onScroll = useRef(
    Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
      useNativeDriver: true,
    }),
  ).current;
  const [isLoading, setIsLoading] = useState(false);
  const appointment = useSelector(selectAppointmentById(appointmentId));

  const {
    id,
    artistId,
    artistName,
    artistPhoto,
    category,
    serviceName,
    startingTime,
    endingTime,
    latitude,
    longitude,
    locationType,
    contact,
    date,
    cancelled,
    serviceDescription,
    serviceDuration,
  } = appointment;

  const goToArtistScreen = () => {
    pushArtistScreen(componentId, {
      props: {
        artistId,
      },
    });
  };

  const isOverdue = dayjs(date).isBefore(new Date().toISOString());

  const showCancel = !cancelled && !isOverdue;

  const dispatch = useDispatch<AsyncDispatch>();

  const onCancel = () => {
    if (isLoading) return;
    setIsLoading(true);
    dispatch(
      cancelAppointment(id, undefined, undefined, () => setIsLoading(false)),
    );
  };

  return (
    <Animated.ScrollView
      onScroll={onScroll}
      contentContainerStyle={styles.scrollContainer}
    >
      {cancelled && <ChipCancelled style={styles.chipCancelled} />}
      <ArtistPhotoName
        photo={artistPhoto}
        name={artistName}
        category={category}
        onPress={goToArtistScreen}
      />
      <Text style={styles.appointmentCategory}>
        {categoryEnumToStr(category)}
      </Text>
      <EntryWithLabel
        label={'Service'}
        name={serviceName}
        rightText={minutesToPresentedDuration(serviceDuration)}
        style={styles.firstEntry}
      />
      {serviceDescription && (
        <EntryWithLabel label={'Description'} name={serviceDescription} />
      )}
      <EntryWithLabel label={'Date'} name={datePrittier(date)} />
      <EntryWithLabel
        label={'Time'}
        name={`${hourPrittier(startingTime)} - ${hourPrittier(endingTime)}`}
      />
      <AppointmentLocationEntry
        locationType={locationType}
        latitude={latitude}
        longitude={longitude}
      />
      <AppointmentContactEntry contact={contact} />

      {showCancel && (
        <TextEntry
          title={strings.action.cancelAppointment}
          onPress={onCancel}
          titleStyle={styles.logoutText}
          containerStyle={styles.logoutContainer}
        />
      )}
    </Animated.ScrollView>
  );
};

export default AppointmentScrollData;
