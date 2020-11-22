import React, { useRef } from 'react';
import { Animated, Text } from 'react-native';
import TextEntry from '../../../../components/entry/text-entry/TextEntry';
import strings from '../../../../res/strings/strings';
import ProfileHeader from '../profile-header/ProfileHeader';
import { styles } from './styles';

interface OwnProps {
  componentId: string;
}

const ProfileOptions: React.FC<OwnProps> = ({ componentId }) => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const onScroll = useRef(
    Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
      useNativeDriver: true,
    }),
  ).current;

  return (
    <>
      <ProfileHeader scrollY={scrollY} />
      <Animated.ScrollView
        contentContainerStyle={styles.scrollContainer}
        onScroll={onScroll}
      >
        <Text style={styles.label}>
          {strings.screen.profile.loggedIn.account.label}
        </Text>
        <TextEntry
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
        />
        <Text style={styles.label}>
          {strings.screen.profile.loggedIn.about.label}
        </Text>
        <TextEntry
          title={strings.screen.profile.loggedIn.about.learnAboutLook}
          onPress={() => {}}
          titleStyle={styles.textEntryName}
          dividerStyle={styles.textEntryDivider}
        />
        <TextEntry
          title={strings.screen.profile.loggedIn.about.becomeAnArtist}
          onPress={() => {}}
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
          onPress={() => {}}
          titleStyle={styles.textEntryName}
          dividerStyle={styles.textEntryDivider}
        />
        <TextEntry
          title={strings.screen.profile.loggedIn.legal.termsOfService}
          onPress={() => {}}
          titleStyle={styles.textEntryName}
          dividerStyle={styles.textEntryDivider}
        />
        <TextEntry
          title={strings.screen.profile.loggedIn.legal.privacyPolicy}
          onPress={() => {}}
          titleStyle={styles.textEntryName}
          dividerStyle={styles.textEntryDivider}
        />
        <TextEntry
          title={strings.action.logout}
          onPress={() => {}}
          titleStyle={[styles.textEntryName, styles.logoutText]}
          dividerStyle={styles.textEntryDivider}
          containerStyle={styles.logoutContainer}
        />
        {
          // TODO: get version using library
        }
        <Text style={styles.versionText}>look v0.0.1</Text>
      </Animated.ScrollView>
    </>
  );
};

export default ProfileOptions;
