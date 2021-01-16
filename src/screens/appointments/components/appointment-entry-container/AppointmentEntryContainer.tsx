import React from 'react';
import { useSelector } from 'react-redux';
import { showAppointmentModal } from '../../../../navigation';
import { selectAppointmentById } from '../../../../store/appointments/appointments.selectors';
import { Category } from '../../../../types';
import AppointmentEntryRow from '../appointment-entry-row/AppointmentEntryRow';

interface OwnProps {
  appointmentId: number;
  showDivider?: boolean;
}

const AppointmentEntryContainer: React.FC<OwnProps> = ({
  appointmentId,
  showDivider,
}) => {
  const { artistPhoto, artistName, category, date, serviceName } = useSelector(
    selectAppointmentById(appointmentId),
  );

  const onPress = () => {
    showAppointmentModal({ props: { appointmentId } });
  };

  return (
    <AppointmentEntryRow
      showDivider={showDivider}
      artistPhoto={artistPhoto || ''}
      artistFullName={artistName || ''}
      category={category || Category.Makeup}
      date={date}
      serviceName={serviceName || ''}
      onPress={onPress}
    />
  );
};

export default AppointmentEntryContainer;
