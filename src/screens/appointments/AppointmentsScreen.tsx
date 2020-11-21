import React, { useRef } from 'react';
import { Animated, SafeAreaView } from 'react-native';
import TopBarLeftAlignment from '../../components/top-bar/top-bar-left-alignment/TopBarLeftAlignment';
import strings from '../../res/strings/strings';
import AppointmentsList from './components/appointments-list/AppointmentsList';
import { styles } from './styles';

interface OwnProps {
  componentId: string;
}

const AppointmentsScreen: React.FC<OwnProps> = ({ componentId }) => {
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>
      <TopBarLeftAlignment
        title={strings.screen.appointments.title}
        scrollY={scrollY}
      />
      <AppointmentsList componentId={componentId} scrollY={scrollY} />
    </SafeAreaView>
  );
};

export default AppointmentsScreen;
