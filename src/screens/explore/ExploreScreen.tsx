import React from 'react';
import { View, Text } from 'react-native';

interface OwnProps {
  componentId: string;
}

const ExploreScreen: React.FC<OwnProps> = ({ componentId }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>explore</Text>
    </View>
  );
};

export default ExploreScreen;
