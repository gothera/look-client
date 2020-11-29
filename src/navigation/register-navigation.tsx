import React from 'react';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { getGenericPassword } from 'react-native-keychain';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {
  PostModal,
  SearchModal,
  SelectDateModal,
  StartAuthModal,
} from '../modals';
import {
  AppointmentsScreen,
  AuthScreen,
  ExploreScreen,
  HomeScreen,
  ProfileScreen,
  SavesScreen,
  FinishSignUpScreen,
} from '../screens';
import { persistor, store } from '../store';
import { loginKeychain } from '../store/profile/profile.actions';
import {
  POST_MODAL,
  SEARCH_MODAL,
  SELECT_DATE_MODAL,
  START_AUTH_MODAL,
} from './modal-constants';
import {
  APPOINTMENTS_SCREEN,
  AUTH_SCREEN,
  EXPLORE_SCREEN,
  FINISH_SIGN_UP_SCREEN,
  HOME_SCREEN,
  PROFILE_SCREEN,
  SAVES_SCREEN,
} from './screen-constants';

import { pushAuthScreen, setHomeRoot } from './screen-navigation';

const WrappedComponent = (Component: React.ComponentType<any>) => {
  return gestureHandlerRootHOC(
    React.memo((props) => {
      return (
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Component {...props} />
          </PersistGate>
        </Provider>
      );
    }),
  );
};

const registerScreens = () => {
  Navigation.registerComponent(HOME_SCREEN, () => WrappedComponent(HomeScreen));
  Navigation.registerComponent(AUTH_SCREEN, () => WrappedComponent(AuthScreen));
  Navigation.registerComponent(EXPLORE_SCREEN, () =>
    WrappedComponent(ExploreScreen),
  );
  Navigation.registerComponent(SAVES_SCREEN, () =>
    WrappedComponent(SavesScreen),
  );
  Navigation.registerComponent(APPOINTMENTS_SCREEN, () =>
    WrappedComponent(AppointmentsScreen),
  );
  Navigation.registerComponent(PROFILE_SCREEN, () =>
    WrappedComponent(ProfileScreen),
  );
  Navigation.registerComponent(FINISH_SIGN_UP_SCREEN, () =>
    WrappedComponent(FinishSignUpScreen),
  );

  registerModals();
};

const registerModals = () => {
  Navigation.registerComponent(START_AUTH_MODAL, () =>
    WrappedComponent(StartAuthModal),
  );

  Navigation.registerComponent(SELECT_DATE_MODAL, () =>
    WrappedComponent(SelectDateModal),
  );
  Navigation.registerComponent(SEARCH_MODAL, () =>
    WrappedComponent(SearchModal),
  );

  Navigation.registerComponent(POST_MODAL, () => WrappedComponent(PostModal));
};

export async function initNavigationAsync() {
  registerScreens();
  Navigation.events().registerAppLaunchedListener(async () => {
    try {
      const genericPassword = await getGenericPassword();

      const loggedIn = genericPassword && genericPassword.username === 'token';

      setHomeRoot();
      // pushAuthScreen();

      // if (loggedIn) {
      //   store.dispatch(loginKeychain((genericPassword as any).password));
      //   /**
      //    * Screens with bottom navigation
      //    */
      //   setLoggedInRoot();
      // } else {
      //   pushAuthScreen();
      // }
    } catch (error) {
      console.log('Error initNavAsync', error);
      pushAuthScreen();
    }
  });
}
