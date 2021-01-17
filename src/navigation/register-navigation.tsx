import React from 'react';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { getGenericPassword } from 'react-native-keychain';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {
  AppointmentModal,
  BookingModal,
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
  ExploreCategoryScreen,
  ArtistScreen,
} from '../screens';
import { persistor, store } from '../store';
import { loginKeychain } from '../store/profile/profile.actions';
import {
  APPOINTMENT_MODAL,
  BOOKING_MODAL,
  POST_MODAL,
  SEARCH_MODAL,
  SELECT_DATE_MODAL,
  START_AUTH_MODAL,
} from './modal-constants';
import {
  APPOINTMENTS_SCREEN,
  ARTIST_SCREEN,
  AUTH_SCREEN,
  EXPLORE_CATEGORY_SCREEN,
  EXPLORE_SCREEN,
  FINISH_SIGN_UP_SCREEN,
  HOME_SCREEN,
  PROFILE_SCREEN,
  SAVES_SCREEN,
} from './screen-constants';

import { pushAuthScreen, setHomeRoot } from './screen-navigation';

const WrappedComponent = (Component: React.ComponentType<any>) => {
  return gestureHandlerRootHOC(reduxProvider(Component));
};

const reduxProvider = (Component: React.ComponentType<any>) => (props: any) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Component {...props} />
      </PersistGate>
    </Provider>
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
  Navigation.registerComponent(EXPLORE_CATEGORY_SCREEN, () =>
    WrappedComponent(ExploreCategoryScreen),
  );

  Navigation.registerComponent(ARTIST_SCREEN, () =>
    WrappedComponent(ArtistScreen),
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

  Navigation.registerComponent(APPOINTMENT_MODAL, () =>
    WrappedComponent(AppointmentModal),
  );

  Navigation.registerComponent(BOOKING_MODAL, () =>
    WrappedComponent(BookingModal),
  );
};

export async function initNavigationAsync() {
  registerScreens();
  Navigation.events().registerAppLaunchedListener(async () => {
    try {
      const genericPassword = await getGenericPassword();

      const loggedIn = genericPassword && genericPassword.username === 'token';
      if (loggedIn) {
        store.dispatch(loginKeychain((genericPassword as any).password));
      }

      setHomeRoot();

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
