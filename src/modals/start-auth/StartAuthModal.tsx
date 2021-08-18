import { Formik } from 'formik';
import React from 'react';
import { ScrollView, Text } from 'react-native';
import { Navigation } from 'react-native-navigation';
import PrimaryButton from '../../components/button/PrimaryButton';
import TextInputWithLabel from '../../components/input/TextInputWithLabel';
import SocialSignupOptions from '../../components/social-signup-options/SocialSignupOptions';
import OrLineDivider from '../../components/ui/OrLineDivider';
import { pushFinishSignUpScreen } from '../../navigation';
import strings from '../../res/strings/strings';
import { emailExists } from '../../services/api/AuthService';
import { styles } from './styles';

const LEFT_BUTTON_CLOSE = 'start_auth_modal_close_button';

interface OwnProps {
  componentId: string;
}

const StartAuthModal: React.FC<OwnProps> = ({ componentId }) => {
  Navigation.mergeOptions(componentId, {
    topBar: {
      leftButtons: [
        {
          id: LEFT_BUTTON_CLOSE,
          icon: require('../../res/images/icons/close-icon.png'),
        },
      ],
    },
  });

  Navigation.events().registerNavigationButtonPressedListener(
    ({ buttonId }) => {
      if (buttonId === LEFT_BUTTON_CLOSE) {
        closeModal();
      }
    },
  );

  const closeModal = () => {
    Navigation.dismissModal(componentId);
  };

  return (
    <Formik
      initialValues={{ email: '' }}
      onSubmit={async (values) => {
        const emailAlreadyExists = await emailExists(values.email);
        pushFinishSignUpScreen(componentId, {
          props: { email: values.email, emailExists: emailAlreadyExists },
        });
      }}
      validate={(values) => {
        const errors: any = {};
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email address.';
        }

        return errors;
      }}
      validateOnMount={false}
      validateOnChange={false}
    >
      {({ handleChange, handleSubmit, values, errors }) => (
        <>
          <ScrollView
            style={styles.container}
            contentContainerStyle={styles.scrollContentContainer}
          >
            <TextInputWithLabel
              setText={handleChange('email')}
              text={values.email}
              label={strings.screen.auth.labels.email}
              placeholder={strings.screen.auth.placeholders.email}
              keyboardType="email-address"
            />
            {errors.email && (
              <Text style={styles.errorLabel}>{errors.email}</Text>
            )}

            <PrimaryButton
              isDisabled={values.email === ''}
              title={strings.action.continue}
              onPress={handleSubmit}
              containerStyle={styles.continueBtn}
            />
            {/* <OrLineDivider containerStyle={styles.orDivider} />
            <SocialSignupOptions
              onApple={() => {}}
              onFacebook={() => {}}
              onGoogle={() => {}}
            /> */}
          </ScrollView>
        </>
      )}
    </Formik>
  );
};

export default StartAuthModal;
