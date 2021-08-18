import React, { useRef } from 'react';
import { Text, Animated } from 'react-native';
import PrimaryButton from '../../../../components/button/PrimaryButton';
import SocialSignupOptions from '../../../../components/social-signup-options/SocialSignupOptions';
import TopBarLeftAlignment from '../../../../components/top-bar/top-bar-left-alignment/TopBarLeftAlignment';
import OrLineDivider from '../../../../components/ui/OrLineDivider';
import {
  pushFinishSignUpScreen,
  showStartAuthModal,
} from '../../../../navigation';
import strings from '../../../../res/strings/strings';
import { styles } from './styles';

interface OwnProps {
  componentId: string;
}

const OfflineProfileOptions: React.FC<OwnProps> = ({ componentId }) => {
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
        {/* <OrLineDivider containerStyle={styles.viewMarginTop} />
        <SocialSignupOptions
          onApple={() => {}}
          onFacebook={() => {}}
          onGoogle={() => {
            // e cont nou =>
            pushFinishSignUpScreen(componentId, {
              props: { suggestedFirstName: 'andrei test', isSocial: true },
            });
          }}
        /> */}
      </Animated.ScrollView>
    </>
  );
};

export default OfflineProfileOptions;
