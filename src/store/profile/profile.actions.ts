import {
  setGenericPassword,
  resetGenericPassword,
} from 'react-native-keychain';
import { LoginResponse, SignupResponse } from '../../services/api/api.types';
import * as AuthService from '../../services/api/AuthService';
import * as ProfileService from '../../services/api/ProfileService';
import { Client } from '../../types';
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
  onSuccess?: () => void,
): ThunkResult<void> => {
  return async function (dispatch, getState) {
    dispatch(loginRequest());

    return AuthService.login(email, password)
      .then((response: LoginResponse) => {
        dispatch(loginKeychain(response.accessToken));
        onSuccess && onSuccess();
      })
      .catch((error) => {
        dispatch(loginFailure());
        console.log('Login error', error);
      });
  };
};

/** LOGOUT */

export const postLogout = (): profileTypes.PostLogout => {
  return {
    type: profileConstants.POST_LOGOUT,
  };
};

export const logout = (): ThunkResult<void> => {
  return function (dispatch) {
    resetGenericPassword().then(async () => {
      dispatch(postLogout());
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
      dispatch(fetchProfile(token));
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
  clientId: number,
  email: string,
): profileTypes.SignUpSuccess => {
  return {
    type: profileConstants.SIGNUP_SUCCESS,
    payload: { email: email, clientId: clientId, userId: userId },
  };
};

export const signUp = (
  email: string,
  password: string,
  birthDate: string,
  firstName: string,
  lastName: string,
  onSuccess?: () => void,
): ThunkResult<void> => {
  return async function (dispatch, _) {
    dispatch(signUpRequest);

    return AuthService.signUp(email, password, birthDate, firstName, lastName)
      .then((response: SignupResponse) => {
        const userId = response.user.id;
        const clientId = response.id;

        dispatch(signUpSuccess(userId, clientId, email));
      })
      .then(() => {
        dispatch(login(email, password, onSuccess));
      })
      .catch((error) => {
        dispatch(loginFailure());
        console.log('Login error', error);
      });
  };
};

// Fetch Profile

const fetchProfileRequest = (): profileTypes.FetchProfileRequest => {
  return {
    type: profileConstants.FETCH_PROFILE_REQUEST,
  };
};

const fetchProfileSuccess = (
  client: Client,
): profileTypes.FetchProfileSuccess => {
  return {
    type: profileConstants.FETCH_PROFILE_SUCCESS,
    payload: { client },
  };
};

const fetchProfileFailure = (): profileTypes.FetchProfileFailure => {
  return {
    type: profileConstants.FETCH_PROFILE_FAILURE,
  };
};

export const fetchProfile = (token: string): ThunkResult<void> => {
  return async function (dispatch, getState) {
    if (getState().profile.isFetching) {
      return Promise.resolve();
    }

    dispatch(fetchProfileRequest());

    return ProfileService.getProfile(token)
      .then((profileResponse) => {
        dispatch(fetchProfileSuccess(profileResponse));
      })
      .catch((error) => {
        console.log('fetch profile error', error);
        dispatch(fetchProfileFailure());
      });
  };
};
