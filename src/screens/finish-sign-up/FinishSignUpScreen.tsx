import React from 'react';
import { Text, ScrollView } from 'react-native';

interface OwnProps {
  componentId: string;
  suggestedFirstName?: string;
  suggestedLastName?: string;
  isSocial: boolean; // if show password input or not
}

const FinishSignUpScreen: React.FC<OwnProps> = ({
  componentId,
  suggestedFirstName,
  suggestedLastName,
  isSocial,
}) => {
  return (
    <ScrollView>
      <Text>{suggestedFirstName}</Text>
    </ScrollView>
  );
};

export default FinishSignUpScreen;
