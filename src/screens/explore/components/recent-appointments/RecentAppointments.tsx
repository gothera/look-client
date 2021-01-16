import React from 'react';
import { Text, View } from 'react-native';
import { connect, ConnectedProps } from 'react-redux';
import { showAppointmentModal } from '../../../../navigation';
import strings from '../../../../res/strings/strings';
import { selectLatestAppointments } from '../../../../store/profile/profile.selectors';
import { StoreState } from '../../../../store/store.types';
import AppointmentEntryRow from '../../../appointments/components/appointment-entry-row/AppointmentEntryRow';
import { styles } from './styles';

// TODO ...

interface OwnProps {}

const mapStateToProps = (state: StoreState) => {
  const latestAppointments = selectLatestAppointments(state);
  return {
    loggedIn: !!state.profile.token,
    latestAppointments,
  };
};

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const RecentAppointments: React.FC<OwnProps & PropsFromRedux> = ({
  loggedIn,
  latestAppointments,
}) => {
  if (
    !loggedIn ||
    latestAppointments === undefined ||
    latestAppointments.length === 0
  ) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {strings.screen.explore.recentAppointments.label}
      </Text>
      {latestAppointments.map((appointment, index) => {
        const goToAppointment = () => {
          showAppointmentModal({ props: { appointmentId: appointment.id } });
        };

        return appointment.artistName &&
          appointment.artistPhoto &&
          appointment.category !== undefined &&
          appointment.serviceName ? (
          <AppointmentEntryRow
            artistFullName={appointment.artistName}
            artistPhoto={appointment.artistPhoto}
            category={appointment.category}
            date={appointment.date}
            serviceName={appointment.serviceName}
            onPress={goToAppointment}
            key={`$appointment-recent-${index}`}
          />
        ) : null;
      })}
    </View>
  );
};

export default connector(RecentAppointments) as React.FC<OwnProps>;
