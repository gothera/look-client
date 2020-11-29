import React from 'react';
import { SafeAreaView } from 'react-native';
import { connect, ConnectedProps } from 'react-redux';
import { State } from '../../store/store.types';
import OfflineProfileOptions from './components/offline-profile-options/OfflineProfileOptions';
import ProfileOptions from './components/profile-options/ProfileOptions';
import { styles } from './styles';

interface OwnProps {
  componentId: string;
}

const mapStateToProps = (store: State) => {
  return {
    token: store.profile.token,
  };
};

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

const ProfileScreen: React.FC<OwnProps & PropsFromRedux> = ({
  componentId,
  token,
}) => {
  const loggedIn = !!token;

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

export default connector(ProfileScreen);
