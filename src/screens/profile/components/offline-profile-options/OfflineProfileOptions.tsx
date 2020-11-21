import React, { useRef } from 'react';
import { Text, Animated } from 'react-native';
import PrimaryButton from '../../../../components/button/PrimaryButton';
import SocialSignupOptions from '../../../../components/social-signup-options/SocialSignupOptions';
import TopBarLeftAlignment from '../../../../components/top-bar/top-bar-left-alignment/TopBarLeftAlignment';
import LineDivider from '../../../../components/ui/LineDivider';
import OrLineDivider from '../../../../components/ui/OrLineDivider';
import { showStartAuthModal } from '../../../../navigation';
import strings from '../../../../res/strings/strings';
import { styles } from './styles';

const OfflineProfileOptions = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const onScroll = useRef(
    Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
      useNativeDriver: true,
    }),
  ).current;

  const onLoginWithEmailPress = () => {
    showStartAuthModal();
  };

  return (
    <>
      <TopBarLeftAlignment
        title={strings.screen.profile.offline.title}
        scrollY={scrollY}
      />
      <Animated.ScrollView
        contentContainerStyle={styles.scrollContainer}
        onScroll={onScroll}
      >
        <Text style={styles.description}>
          {strings.screen.profile.offline.description}
        </Text>
        <PrimaryButton
          title={strings.action.logIn}
          containerStyle={styles.loginWithEmailBtn}
          onPress={onLoginWithEmailPress}
        />
        <OrLineDivider containerStyle={styles.viewMarginTop} />
        <SocialSignupOptions
          onApple={() => {}}
          onFacebook={() => {}}
          onGoogle={() => {}}
        />
      </Animated.ScrollView>
    </>
  );
};

export default OfflineProfileOptions;
