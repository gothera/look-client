import { Client } from '../../types';
import * as profileConstants from './profile.constants';

export interface InvalidateStoreAction {
  type: typeof profileConstants.INVALIDATE_STORE;
}

export interface LoginSuccess {
  type: typeof profileConstants.LOGIN_SUCCESS;
  payload: { token: string };
}

export interface LoginRequest {
  type: typeof profileConstants.LOGIN_REQUEST;
}

export interface LoginFailure {
  type: typeof profileConstants.LOGIN_FAILURE;
}

export interface SignUpRequest {
  type: typeof profileConstants.SIGNUP_REQUEST;
}

export interface SignUpSuccess {
  type: typeof profileConstants.SIGNUP_SUCCESS;
  payload: { userId: number; clientId: number; email: string };
}

export interface SignUpFailure {
  type: typeof profileConstants.SIGNUP_FAILURE;
}

export interface fetchProfileRequest {
  type: typeof profileConstants.FETCH_PROFILE_REQUEST;
}

export interface fetchProfileSuccess {
  type: typeof profileConstants.FETCH_PROFILE_SUCCESS;
  payload: {profile: Client};
}

export interface fetchProfileFailure {
  type: typeof profileConstants.FETCH_PROFILE_FAILURE;
}

export interface postLogout {
  type: typeof profileConstants.POST_LOGOUT;
}

export type ProfileAction =
  | InvalidateStoreAction
  | LoginSuccess
  | LoginRequest
  | LoginFailure
  | SignUpRequest
  | SignUpSuccess
  | SignUpFailure
  | postLogout;
