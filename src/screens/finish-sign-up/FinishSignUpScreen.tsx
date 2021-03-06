import { Formik } from 'formik';
import React from 'react';
import { Text, ScrollView } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { connect, ConnectedProps } from 'react-redux';
import PrimaryButton from '../../components/button/PrimaryButton';
import PasswordInputWithLabel from '../../components/input/PasswordInputWithLabel';
import PlaceholderInput from '../../components/input/placeholder-input/PlaceholderInput';
import TextInputWithLabel from '../../components/input/TextInputWithLabel';
import { showSelectDateModal } from '../../navigation';
import strings from '../../res/strings/strings';
import { login, signUp } from '../../store/profile/profile.actions';
import { styles } from './styles';

interface OwnProps {
  componentId: string;
  suggestedFirstName?: string;
  suggestedLastName?: string;
  isSocial: boolean; // if show password input or not
  email: string;
  emailExists: boolean;
}

const validateValues = (values: any, onlyPassword: boolean) => {
  if (onlyPassword) {
    return !values.password;
  }

  return !(
    values.firstName &&
    values.lastName &&
    values.date &&
    values.password
  );
};

const mapDispatchToProps = {
  signUp,
  login,
};

const connector = connect(null, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

const FinishSignUpScreen: React.FC<OwnProps & PropsFromRedux> = ({
  componentId,
  suggestedFirstName,
  suggestedLastName,
  isSocial,
  signUp,
  email,
  emailExists,
  login,
}) => {
  if (emailExists) {
    Navigation.mergeOptions(componentId, {
      topBar: {
        title: {
          text: 'Enter password',
        },
      },
    });
  }

  const dismissAllModals = () => {
    Navigation.dismissAllModals();
  };

  return (
    <ScrollView>
      <Text>{suggestedFirstName}</Text>
      <Formik
        initialValues={{ firstName: '', lastName: '', date: '', password: '' }}
        onSubmit={(values) => {
          if (emailExists) {
            login(email, values.password, dismissAllModals);
          } else {
            signUp(
              email,
              values.password,
              values.date,
              values.firstName,
              values.lastName,
              dismissAllModals,
            );
          }
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <>
            <ScrollView
              style={styles.container}
              contentContainerStyle={styles.scrollContentContainer}
            >
              {!emailExists && (
                <>
                  <TextInputWithLabel
                    setText={handleChange('firstName')}
                    text={values.firstName}
                    label={strings.screen.finishSignUp.labels.firstName}
                    placeholder={strings.screen.finishSignUp.labels.firstName}
                  />
                  <TextInputWithLabel
                    setText={handleChange('lastName')}
                    text={values.lastName}
                    containerStyle={styles.inputText}
                    label={strings.screen.finishSignUp.labels.lastName}
                    placeholder={strings.screen.finishSignUp.labels.lastName}
                  />
                  <PlaceholderInput
                    label={strings.screen.finishSignUp.labels.birthday}
                    containerStyle={styles.inputText}
                    placeholder={
                      strings.screen.finishSignUp.placeholders
                        .birthDayPlaceholder
                    }
                    text={values.date}
                    onPress={() =>
                      showSelectDateModal({
                        props: {
                          onDateChange: (date: Date) =>
                            handleChange('date')(
                              date.toISOString().split('T')[0],
                            ),
                        },
                      })
                    }
                  />
                </>
              )}
              <TextInputWithLabel
                text={email}
                label={strings.screen.finishSignUp.labels.email}
                placeholder={strings.screen.finishSignUp.labels.email}
                disabled={true}
                setText={() => {}}
                containerStyle={styles.inputText}
              />

              <PasswordInputWithLabel
                text={values.password}
                placeholder={strings.screen.finishSignUp.placeholders.password}
                setText={handleChange('password')}
                containerStyle={styles.inputText}
              />

              <PrimaryButton
                isDisabled={validateValues(values, emailExists)}
                title={strings.action.continue}
                onPress={handleSubmit}
                containerStyle={styles.continueBtn}
              />
            </ScrollView>
          </>
        )}
      </Formik>
    </ScrollView>
  );
};

export default connector(FinishSignUpScreen);
