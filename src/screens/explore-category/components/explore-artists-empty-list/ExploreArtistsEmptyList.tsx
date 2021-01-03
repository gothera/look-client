import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

const ExploreArtistsEmptyList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sorry, couldn't find any artist near you.</Text>
    </View>
  );
};

export default ExploreArtistsEmptyList;
