import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Client } from '../types';
import { ProfileAction } from './profile/profile.types';

export type Primitive = undefined | null | boolean | string | number | Function;

export interface ProfileState {
  token?: string;
  isLogging: boolean;
  userId?: number;
  clientId?: number;
  isFetching: boolean;
  client?: Client;
}

export interface State {
  profile: ProfileState;
}

export type StoreState = State;

export type TAction = ProfileAction;

export type ThunkResult<R> = ThunkAction<R, StoreState, null, TAction>;

export type AsyncDispatch = ThunkDispatch<StoreState, null, TAction>;
