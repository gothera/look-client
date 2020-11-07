import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { connect, ConnectedProps } from 'react-redux';
// import { showLoadingModal } from '../../navigation'; de bagat inapoi
import { StoreState } from '../../store/store.types';
import { color, font, typography } from '../../theme';
import LoginContent from './components/LoginContent';
import SignInContent from './components/SignInContent';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const STATUS_BAR_HEIGHT = getStatusBarHeight();

enum AuthType {
  Login,
  Signup,
}

interface OwnProps {
  componentId: string;
}

const mapStateToProps = (state: StoreState, _: OwnProps) => {
  return {
    isLogging: state.profile.isLogging,
  };
};

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

const AuthScreen: React.FC<OwnProps & PropsFromRedux> = ({
  componentId,
  isLogging,
}) => {


  return (<View style={{ flex: 1,justifyContent: 'center', alignItems: 'center' }}>
    <Text style={styles.test}>Auth Screen</Text></View>)

  // const [authType, setAuthType] = useState(AuthType.Login);

  // useEffect(() => {
  //   if (isLogging) {
  //     showLoadingModal();
  //   }
  // }, [isLogging]);

  // const onChangeAuthTypePress = () => {
  //   if (authType === AuthType.Login) {
  //     setAuthType(AuthType.Signup);
  //   } else {
  //     setAuthType(AuthType.Login);
  //   }
  // };

  // return (
  //   <View style={styles.container}>
  //     <KeyboardAwareScrollView
  //       contentContainerStyle={styles.scrollContentContainer}
  //     >
  //       {authType === AuthType.Login && (
  //         <LoginContent
  //           componentId={componentId}
  //           onChangeAuthType={onChangeAuthTypePress}
  //         />
  //       )}
  //       {authType === AuthType.Signup && (
  //         <SignInContent
  //           componentId={componentId}
  //           onChangeAuthType={onChangeAuthTypePress}
  //         />
  //       )}
  //     </KeyboardAwareScrollView>
  //   </View>
  // );
};

interface Style {
  container: ViewStyle;
  text: TextStyle;
  scrollContentContainer: ViewStyle;
  header: TextStyle;
  headerDescription: TextStyle;
  alreadyContainer: ViewStyle;
  alreadyDescriptionText: TextStyle;
  alreadyOptionText: TextStyle;
  test: TextStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    paddingTop: STATUS_BAR_HEIGHT,
  },
  text: {
    ...font.blackItalic,
    fontSize: 30,
  },
  scrollContentContainer: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 40,
    alignItems: 'center',
  },
  header: {
    ...typography.title2Bold,
    marginTop: 25,
    color: color.textPrimary,
  },
  headerDescription: {
    ...typography.subheadlineSemiBold,
    color: color.muted,
    marginTop: 10,
  },
  alreadyContainer: {
    marginTop: 30,
  },
  alreadyDescriptionText: {
    ...typography.body,
  },
  alreadyOptionText: {
    ...typography.bodySemiBold,
    marginTop: 8,
  },
  test: {
    ...typography.bodySemiBold,
  }
});

export default connector(AuthScreen);
