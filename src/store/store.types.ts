import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Artist, Client, Pageable, RequestStatus } from '../types';
import { ArtistsAction } from './artists/artists.types';
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

export interface ArtistsState {
  local: Record<number, Artist>;
  makeup: {
    byId: number[];
    requestStatus?: RequestStatus;
    pageable?: Pageable;
  };
  nails: {
    byId: number[];
    requestStatus?: RequestStatus;
    pageable?: Pageable;
  };
  hair: {
    byId: number[];
    requestStatus?: RequestStatus;
    pageable?: Pageable;
  };
  eyebrows: {
    byId: number[];
    requestStatus?: RequestStatus;
    pageable?: Pageable;
  };
  bodyCare: {
    byId: number[];
    requestStatus?: RequestStatus;
    pageable?: Pageable;
  };
  lashes: {
    byId: number[];
    requestStatus?: RequestStatus;
    pageable?: Pageable;
  };
}

export interface State {
  profile: ProfileState;
  artists: ArtistsState;
}

export type StoreState = State;

export type TAction = ProfileAction | ArtistsAction;

export type ThunkResult<R> = ThunkAction<R, StoreState, null, TAction>;

export type AsyncDispatch = ThunkDispatch<StoreState, null, TAction>;
