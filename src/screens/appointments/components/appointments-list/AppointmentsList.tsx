import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOwnAppointments } from '../../../../store/appointments/appointments.actions';
import { selectAppointments } from '../../../../store/appointments/appointments.selectors';
import { AsyncDispatch } from '../../../../store/store.types';
import AppointmentEntryContainer from '../appointment-entry-container/AppointmentEntryContainer';
import { styles } from './styles';

interface OwnProps {
  componentId: string;
  scrollY: Animated.Value;
}

const AppointmentsList: React.FC<OwnProps> = ({ componentId, scrollY }) => {
  const appointments = useSelector(selectAppointments());

  const dispatch = useDispatch<AsyncDispatch>();

  const fetchMoreAppointments = (isInitialLoading: boolean) => {
    if (
      appointments.requestStatus === 'loading' ||
      appointments.requestStatus === 'initial-loading'
    )
      return;
    dispatch(
      fetchOwnAppointments(
        isInitialLoading,
        appointments.pageable?.pageNumber || 0,
      ),
    );
  };

  useEffect(() => {
    fetchMoreAppointments(true);
  }, []);

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
      onEndReached={() => fetchMoreAppointments(false)}
    />
  );
};

export default AppointmentsList;
