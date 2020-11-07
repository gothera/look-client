import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { ArtistProgramEntry,
} from '../types/globalTypes';
import { AppointmentAction } from './appointment/appointment.types';
import { NotificationAction } from './notification/notification.types';
import { PostAction } from './post/post.types';
import { ProfileAction } from './profile/profile.types';
import { ReviewAction } from './review/review.types';
import { OfferedServiceAction } from './offeredService/offeredService.types';

export type Primitive = undefined | null | boolean | string | number | Function;

export interface ProfileState {
  firstName?: string;
  lastName?: string;
  token?: string;
  isLogging: boolean;
  userId?: number;
  artistId?: number;
  email?: string;
  category?: string;
  phoneNumber?: string;
  profilePicture?: string;
  isUploadingProfilePicture: boolean;
  scheduledDates: string[];
  bio?: string;
  likes: number;
  appointmentsCount: number;
  rating: number;
  isFetching: boolean;
  localProgramEntries: Record<string, ArtistProgramEntry>;
  programEntriesByDate: string[];
  birthDate?: string;
}

export interface State {
  profile: ProfileState;
}

export type StoreState = State;

export type TAction =
  | ProfileAction;

export type ThunkResult<R> = ThunkAction<R, StoreState, null, TAction>;

export type AsyncDispatch = ThunkDispatch<StoreState, null, TAction>;
