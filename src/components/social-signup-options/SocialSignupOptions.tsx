import React from 'react';
import { View, StyleProp, ViewStyle, Platform } from 'react-native';
import strings from '../../res/strings/strings';
import { AppleBtnIcon, FacebookBtnIcon, GoogleBtnIcon } from '../../res/svg';
import ButtonWithIcon from '../button/ButtonWithIcon';
import { styles } from './styles';

interface OwnProps {
  onGoogle: () => void;
  onFacebook: () => void;
  onApple: () => void;
  style?: StyleProp<ViewStyle>;
}

const SocialSignupOptions: React.FC<OwnProps> = ({
  onApple,
  onFacebook,
  onGoogle,
  style,
}) => {
  return (
    <View style={style}>
      {Platform.OS === 'ios' && (
        <ButtonWithIcon
          title={strings.screen.auth.buttons.continueWithApple}
          onPress={onApple}
          icon={<AppleBtnIcon />}
          containerStyle={styles.viewMargin}
        />
      )}
      <ButtonWithIcon
        title={strings.screen.auth.buttons.continueWithGoogle}
        onPress={onGoogle}
        icon={<GoogleBtnIcon />}
        containerStyle={styles.viewMargin}
      />
      <ButtonWithIcon
        title={strings.screen.auth.buttons.continueWithFacebook}
        onPress={onFacebook}
        icon={<FacebookBtnIcon />}
        containerStyle={[styles.viewMargin, { marginBottom: 10 }]}
      />
    </View>
  );
};

export default SocialSignupOptions;
