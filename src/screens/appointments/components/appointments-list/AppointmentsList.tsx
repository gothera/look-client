import React, { useRef } from 'react';
import { Animated } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOwnAppointments } from '../../../../store/appointments/appointments.actions';
import { selectAppointments } from '../../../../store/appointments/appointments.selectors';
import { AsyncDispatch } from '../../../../store/store.types';
import AppointmentEntryContainer from '../appointment-entry-container/AppointmentEntryContainer';
import AppointmentsListEmpty from '../appointments-list-empty/AppointmentsListEmpty';
import { styles } from './styles';

interface OwnProps {
  componentId: string;
  scrollY: Animated.Value;
}

const AppointmentsList: React.FC<OwnProps> = ({ componentId, scrollY }) => {
  const appointments = useSelector(selectAppointments());

  const dispatch = useDispatch<AsyncDispatch>();

  const fetchMoreAppointments = () => {
    if (
      appointments.requestStatus === 'loading' ||
      appointments.requestStatus === 'initial-loading' ||
      appointments.pageable?.last
    )
      return;
    dispatch(
      fetchOwnAppointments(false, appointments.pageable?.pageNumber || 0),
    );
  };

  const renderAppointmentRow = ({
    item,
    index,
  }: {
    item: number;
    index: number;
  }) => {
    return (
      <AppointmentEntryContainer
        appointmentId={item}
        showDivider={index !== appointments.byId.length - 1}
      />
    );
  };

  const onScroll = useRef(
    Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
      useNativeDriver: true,
    }),
  ).current;

  return (
    <Animated.FlatList
      data={appointments.byId}
      renderItem={renderAppointmentRow}
      style={styles.list}
      contentContainerStyle={styles.containerList}
      onScroll={onScroll}
      keyExtractor={(i: number) => `appointment-list-${i}`}
      onEndReached={fetchMoreAppointments}
      ListEmptyComponent={AppointmentsListEmpty}
      onEndReachedThreshold={0.5}
    />
  );
};

export default AppointmentsList;
