import React from 'react';
import { View, Text, Animated } from 'react-native';
import { connect, ConnectedProps } from 'react-redux';
import UserAvatar from '../../../../components/avatar/user-avatar/UserAvatar';
import LineDivider from '../../../../components/ui/LineDivider';
import { StoreState } from '../../../../store/store.types';
import { styles } from './styles';

interface OwnProps {
  scrollY?: Animated.Value;
}

const mapStateToProps = (state: StoreState) => {
  return {
    // get data from store
    photo: state.profile.client?.profilePicture,
    name: state.profile.client
      ? state.profile.client.firstName + ' ' + state.profile.client.lastName
      : 'Your profile',
  };
};

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const ProfileHeader: React.FC<OwnProps & PropsFromRedux> = ({
  photo,
  name,
  scrollY,
}) => {
  const dividerOpacity = scrollY?.interpolate({
    inputRange: [0, 10],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  return (
    <>
      <View style={styles.container}>
        <UserAvatar photoUrl={photo} size={70} />
        <Text style={styles.name}>{name}</Text>
      </View>
      <Animated.View
        style={scrollY !== undefined && { opacity: dividerOpacity }}
      >
        <LineDivider />
      </Animated.View>
    </>
  );
};

export default connector(ProfileHeader) as React.FC<OwnProps>;
