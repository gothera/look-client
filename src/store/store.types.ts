import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import {
  Appointment,
  Artist,
  Client,
  Pageable,
  Post,
  RequestStatus,
} from '../types';
import { ArtistsAction } from './artists/artists.types';
import { ProfileAction } from './profile/profile.types';
import { PostsActions } from './posts/posts.types';
import { AppointmentsActions } from './appointments/appointments.types';

export type Primitive = undefined | null | boolean | string | number | Function;

export interface ProfileState {
  token?: string;
  isLogging: boolean;
  userId?: number;
  clientId?: number;
  isFetching: boolean;
  client?: Client;
}

export interface PagedDataById {
  byId: number[];
  requestStatus?: RequestStatus;
  pageable?: Pageable;
}
export interface EntitiesDataStore {
  makeup: PagedDataById;
  nails: PagedDataById;
  hair: PagedDataById;
  eyebrows: PagedDataById;
  bodyCare: PagedDataById;
  lashes: PagedDataById;
}

export interface ArtistsState {
  local: Record<number, Artist>;
  explore: EntitiesDataStore;
  saved: EntitiesDataStore;
}

export interface PostsState {
  local: Record<number, Post>;
  saved: EntitiesDataStore;
}

export interface AppointmentsState {
  local: Record<number, Appointment>;
  own: PagedDataById;
}

export interface State {
  profile: ProfileState;
  artists: ArtistsState;
  posts: PostsState;
  appointments: AppointmentsState;
}

export type StoreState = State;

export type TAction =
  | ProfileAction
  | ArtistsAction
  | PostsActions
  | AppointmentsActions;

export type ThunkResult<R> = ThunkAction<R, StoreState, null, TAction>;

export type AsyncDispatch = ThunkDispatch<StoreState, null, TAction>;
