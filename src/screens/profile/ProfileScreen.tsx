import React from 'react';
import { SafeAreaView } from 'react-native';
import OfflineProfileOptions from './components/offline-profile-options/OfflineProfileOptions';
import { styles } from './styles';

interface OwnProps {
  componentId: string;
}

const ProfileScreen: React.FC<OwnProps> = ({ componentId }) => {
  return (
    <SafeAreaView style={styles.container}>
      <OfflineProfileOptions componentId={componentId} />
    </SafeAreaView>
  );
};

export default ProfileScreen;
