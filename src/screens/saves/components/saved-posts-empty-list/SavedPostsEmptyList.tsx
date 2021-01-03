import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

const SavedPostsEmptyList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No posts saved for this category</Text>
    </View>
  );
};

export default SavedPostsEmptyList;
