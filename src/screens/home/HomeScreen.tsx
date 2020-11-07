import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

interface OwnProps {
  componentId: string;
}

const HomeScreen: React.FC<OwnProps> = ({ componentId }) => {



  return (
    <View style={styles.container}>
      <Text>test</Text>
    </View>
  );
};

export default HomeScreen;
