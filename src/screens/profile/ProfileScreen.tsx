import React from 'react';
import { SafeAreaView } from 'react-native';
import OfflineProfileOptions from './components/offline-profile-options/OfflineProfileOptions';
import ProfileOptions from './components/profile-options/ProfileOptions';
import { styles } from './styles';

interface OwnProps {
  componentId: string;
}

const ProfileScreen: React.FC<OwnProps> = ({ componentId }) => {
  const loggedIn = true;

  return (
    <SafeAreaView style={styles.container}>
      {loggedIn ? (
        <ProfileOptions componentId={componentId} />
      ) : (
        <OfflineProfileOptions componentId={componentId} />
      )}
    </SafeAreaView>
  );
};

export default ProfileScreen;
