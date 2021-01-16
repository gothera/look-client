import React, { useRef, useState } from 'react';
import { View, TouchableOpacity, Animated } from 'react-native';
import { Navigation, NavigationComponentProps } from 'react-native-navigation';
import TopBarLeftAlignment from '../../components/top-bar/top-bar-left-alignment/TopBarLeftAlignment';
import strings from '../../res/strings/strings';
import { CloseIcon } from '../../res/svg';
import { styles } from './styles';
import { useDispatch } from 'react-redux';
import { AsyncDispatch } from '../../store/store.types';
import { RequestStatus } from '../../types';
import { fetchAppointment } from '../../store/appointments/appointments.actions';
import AppointmentScrollData from './components/appointment-scroll-data/AppointmentScrollData';

interface Props extends NavigationComponentProps {
  appointmentId: number;
}

const AppointmentModal: React.FC<Props> = ({ appointmentId, componentId }) => {
  const dispatch = useDispatch<AsyncDispatch>();

  const [requestStatus, setRequestStatus] = useState<RequestStatus>(undefined);

  const scrollY = useRef(new Animated.Value(0)).current;

  const closeModal = () => {
    Navigation.dismissModal(componentId);
  };

  const closeButton = (
    <TouchableOpacity onPress={closeModal}>
      <CloseIcon />
    </TouchableOpacity>
  );

  const onFetchAppointmentSuccess = () => {
    setRequestStatus('success');
  };

  const onFetchAppointmentFailure = () => {
    setRequestStatus('failure');
  };

  React.useEffect(() => {
    dispatch(
      fetchAppointment(
        appointmentId,
        onFetchAppointmentSuccess,
        onFetchAppointmentFailure,
      ),
    );
  }, []);

  return (
    <View style={styles.container}>
      <TopBarLeftAlignment
        title={strings.screen.appointment.title}
        rightButton={closeButton}
        scrollY={scrollY}
      />
      <AppointmentScrollData
        appointmentId={appointmentId}
        scrollY={scrollY}
        componentId={componentId}
      />
    </View>
  );
};

export default AppointmentModal;
