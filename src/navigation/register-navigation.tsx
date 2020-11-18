import React from 'react';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { getGenericPassword } from 'react-native-keychain';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { AuthScreen, HomeScreen } from '../screens';
import { persistor, store } from '../store';
import { loginKeychain } from '../store/profile/profile.actions';
import { AUTH_SCREEN, HOME_SCREEN } from './screen-constants';

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

  registerModals();
};

const registerModals = () => {};

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
