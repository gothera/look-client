import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { ProfileAction } from './profile/profile.types';

export type Primitive = undefined | null | boolean | string | number | Function;

export interface ProfileState {
  firstName?: string;
  lastName?: string;
  token?: string;
  isLogging: boolean;
  userId?: number;
  isFetching: boolean;
  email?: string;
}

export interface State {
  profile: ProfileState;
}

export type StoreState = State;

export type TAction =
  | ProfileAction;

export type ThunkResult<R> = ThunkAction<R, StoreState, null, TAction>;

export type AsyncDispatch = ThunkDispatch<StoreState, null, TAction>;
