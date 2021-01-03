import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { color, spacing, typography } from '../../../../theme';

const ArtistGalleryEmptyList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No photos added</Text>
    </View>
  );
};

export default ArtistGalleryEmptyList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    ...typography.headline,
    color: color.textPrimary,
    marginTop: spacing.large,
    textAlign: 'center',
  },
});
