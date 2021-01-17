import React from 'react';
import { View, Text } from 'react-native';
import strings from '../../../../res/strings/strings';
import { BookArtistStep } from '../../../../types';
import { styles } from './styles';

interface Props {
  step: BookArtistStep;
}

const BookingStep: React.FC<Props> = ({ step }) => {
  const getName = () => {
    switch (step) {
      case BookArtistStep.Service:
        return strings.screen.booking.steps.service.title;
      case BookArtistStep.Date:
        return strings.screen.booking.steps.date.title;
      case BookArtistStep.Location:
        return strings.screen.booking.steps.location.title;
      case BookArtistStep.Confirmation:
        return strings.screen.booking.steps.confirmation.title;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.stepName}>{getName()}</Text>
      <Text style={styles.stepIndicator}>{`Step ${step + 1}/4`}</Text>
    </View>
  );
};

export default BookingStep;
