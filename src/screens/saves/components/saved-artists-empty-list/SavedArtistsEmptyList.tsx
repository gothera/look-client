import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

const SavedArtistsEmptyList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No artist saved for this category</Text>
    </View>
  );
};

export default SavedArtistsEmptyList;
