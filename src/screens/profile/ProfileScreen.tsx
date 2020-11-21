import React from 'react';
import { SafeAreaView } from 'react-native';
import OfflineProfileOptions from './components/offline-profile-options/OfflineProfileOptions';
import { styles } from './styles';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <OfflineProfileOptions />
    </SafeAreaView>
  );
};

export default ProfileScreen;
