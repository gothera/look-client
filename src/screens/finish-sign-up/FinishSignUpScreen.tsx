import React from 'react';
import { Text, ScrollView } from 'react-native';

interface OwnProps {
  componentId: string;
  suggestedFirstName?: string;
  suggestedLastName?: string;
}

const FinishSignUpScreen: React.FC<OwnProps> = ({
  componentId,
  suggestedFirstName,
  suggestedLastName,
}) => {
  return (
    <ScrollView>
      <Text>sabin</Text>
    </ScrollView>
  );
};

export default FinishSignUpScreen;
