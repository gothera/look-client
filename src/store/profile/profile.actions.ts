import {
  setGenericPassword,
  resetGenericPassword,
} from 'react-native-keychain';
import {
  setLoggedInRoot,
  pushAuthScreen,
} from '../../navigation';
import {
  LoginResponse,
  SignupResponse,
} from '../../services/api/api.types';
import * as AuthService from '../../services/api/AuthService';
import { ThunkResult } from '../store.types';
import * as profileConstants from './profile.constants';
import * as profileTypes from './profile.types';

/**
 * LOGIN
 */
const loginRequest = (): profileTypes.LoginRequest => {
  return {
    type: profileConstants.LOGIN_REQUEST,
  };
};

const loginSuccess = (token: string): profileTypes.LoginSuccess => {
  return {
    type: profileConstants.LOGIN_SUCCESS,
    payload: { token },
  };
};

const loginFailure = (): profileTypes.LoginFailure => {
  return {
    type: profileConstants.LOGIN_FAILURE,
  };
};

/**
 * Used when pressing Login
 * API Call for login
 */
export const login = (
  email: string,
  password: string,
  isRegister?: boolean,
): ThunkResult<void> => {
  return async function (dispatch, getState) {
    // if (getState().profile.isLogging) {
    //   return Promise.resolve();
    // }

    dispatch(loginRequest());

    return AuthService.login(email, password)
      .then((response: LoginResponse) => {
        dispatch(loginKeychain(response.accessToken));
      })
      .then(() => {
        if (!isRegister) {
          // pushHomeScreen();
          setLoggedInRoot();
        }
      })
      .catch((error) => {
        dispatch(loginFailure());
        console.log('Login error', error);
      });
  };
};

/** LOGOUT */

export const postLogout = (): profileTypes.postLogout => {
  return {
    type: profileConstants.POST_LOGOUT,
  };
};

export const logout = (): ThunkResult<void> => {
  return function (dispatch) {
    resetGenericPassword().then(async () => {
      dispatch(postLogout());
      pushAuthScreen();
    });
  };
};

/**
 * Used after login request and on init navigation
 * Set login in keychain
 */
export const loginKeychain = (token: string): ThunkResult<void> => {
  return async function (dispatch) {
    setGenericPassword('token', token).then(async () => {
      dispatch(loginSuccess(token));
      // dispatch(fetchProfile(token));
    });
  };
};

export const signUpRequest = (): profileTypes.SignUpRequest => {
  return {
    type: profileConstants.SIGNUP_REQUEST,
  };
};

export const signUpFailure = (): profileTypes.SignUpFailure => {
  return {
    type: profileConstants.SIGNUP_FAILURE,
  };
};

export const signUpSuccess = (
  userId: number,
  artistId: number,
  email: string,
): profileTypes.SignUpSuccess => {
  return {
    type: profileConstants.SIGNUP_SUCCESS,
    payload: { email: email, artistId: artistId, userId: userId },
  };
};

export const signUp = (email: string, password: string): ThunkResult<void> => {
  return async function (dispatch, _) {
    dispatch(signUpRequest);

    return AuthService.signUp(email, password)
      .then((response: SignupResponse) => {
        const userId = response.user.id;
        const artistId = response.id;

        dispatch(signUpSuccess(userId, artistId, email));
      })
      .then(() => {
        dispatch(login(email, password, true));
      })
      .catch((error) => {
        dispatch(loginFailure());
        console.log('Login error', error);
      });
  };
};
