import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import strings from '../../../../res/strings/strings';
import { StoreState } from '../../../../store/store.types';
import { styles } from './styles';

const AppointmentsListEmpty = () => {
  const isLoggedIn = useSelector(
    (state: StoreState) => state.profile.token !== undefined,
  );

  const message = isLoggedIn
    ? strings.screen.appointments.emptySI
    : strings.screen.appointments.emptyNSI;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

export default AppointmentsListEmpty;
