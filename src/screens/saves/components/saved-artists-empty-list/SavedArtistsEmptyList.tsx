import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { StoreState } from '../../../../store/store.types';
import { styles } from './styles';

const SavedArtistsEmptyList = () => {
  const isLoggedIn = useSelector(
    (state: StoreState) => state.profile.token !== undefined,
  );

  const message = isLoggedIn
    ? 'No artist saved for this category'
    : 'Log in. Your favorite artists will appear here.';

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

export default SavedArtistsEmptyList;
