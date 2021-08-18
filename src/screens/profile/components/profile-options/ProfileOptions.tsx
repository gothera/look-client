import React, { useRef } from 'react';
import { Animated, Text } from 'react-native';
import TextEntry from '../../../../components/entry/text-entry/TextEntry';
import strings from '../../../../res/strings/strings';
import ProfileHeader from '../profile-header/ProfileHeader';
import { styles } from './styles';
import { logout } from '../../../../store/profile/profile.actions';
import { connect, ConnectedProps } from 'react-redux';
import { Linking } from 'react-native';

interface OwnProps {
  componentId: string;
}

const mapDispatchToProps = {
  logout,
};

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const ProfileOptions: React.FC<OwnProps & PropsFromRedux> = ({
  componentId,
  logout,
}) => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const onScroll = useRef(
    Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
      useNativeDriver: true,
    }),
  ).current;

  const onLogout = () => {
    logout();
  };

  return (
    <>
      <ProfileHeader scrollY={scrollY} />
      <Animated.ScrollView
        contentContainerStyle={styles.scrollContainer}
        onScroll={onScroll}
      >
        {/* <Text style={styles.label}>
          {strings.screen.profile.loggedIn.account.label}
        </Text> */}
        {/* <TextEntry
          title={strings.screen.profile.loggedIn.account.settings}
          onPress={() => {}}
          titleStyle={styles.textEntryName}
          dividerStyle={styles.textEntryDivider}
        />
        <TextEntry
          title={strings.screen.profile.loggedIn.account.billingInformation}
          onPress={() => {}}
          titleStyle={styles.textEntryName}
          dividerStyle={styles.textEntryDivider}
        /> */}
        <Text style={styles.label}>
            {strings.screen.profile.loggedIn.about.label}
        </Text>
        <TextEntry
          title={strings.screen.profile.loggedIn.about.learnAboutLook}
          onPress={() => Linking.openURL('https://lookapp.ro/despre-look-aplicatia-pentru-programari-beauty/')}
          titleStyle={styles.textEntryName}
          dividerStyle={styles.textEntryDivider}
        />
        <TextEntry
          title={strings.screen.profile.loggedIn.about.becomeAnArtist}
          onPress={() => Linking.openURL('https://lookapp.ro/#lookartist')}
          titleStyle={styles.textEntryName}
          dividerStyle={styles.textEntryDivider}
        />
        <Text style={styles.label}>
          {strings.screen.profile.loggedIn.support.label}
        </Text>
        <TextEntry
          title={strings.screen.profile.loggedIn.support.rateUs}
          onPress={() => {}}
          titleStyle={styles.textEntryName}
          dividerStyle={styles.textEntryDivider}
        />
        <TextEntry
          title={strings.screen.profile.loggedIn.support.contactUs}
          onPress={() => Linking.openURL('https://lookapp.ro/contacteaza-look-devino-stilist-in-aplicatie/')}
          titleStyle={styles.textEntryName}
          dividerStyle={styles.textEntryDivider}
        />
        <TextEntry
          title={strings.screen.profile.loggedIn.legal.termsOfService}
          onPress={() => Linking.openURL('https://lookapp.ro/termeni-si-servicii-ultilizare-look/')}
          titleStyle={styles.textEntryName}
          dividerStyle={styles.textEntryDivider}
        />
        <TextEntry
          title={strings.screen.profile.loggedIn.legal.privacyPolicy}
          onPress={() => Linking.openURL('https://lookapp.ro/politica-de-confidentialitate-look/')}
          titleStyle={styles.textEntryName}
          dividerStyle={styles.textEntryDivider}
        />
        <TextEntry
          title={strings.action.logout}
          onPress={onLogout}
          titleStyle={[styles.textEntryName, styles.logoutText]}
          dividerStyle={styles.textEntryDivider}
          containerStyle={styles.logoutContainer}
        />
        <Text style={styles.versionText}>look v0.0.1</Text>
      </Animated.ScrollView>
    </>
  );
};

export default connector(ProfileOptions) as React.FC<OwnProps>;
