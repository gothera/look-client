import { SHARE_APPS_BY_OPTIONS } from '../res/constants';
import {
  AppointmentApi,
  ArtistApi,
  OfferedServiceApi,
  PostApi,
  ReviewApi,
} from '../services/api/api.types';
import { Category, Currency } from './enums';

export interface ImagePickerResponse {
  path: string;
  mime: string;
  width: number;
  height: number;
  filename: string;
}

export interface PickerItem {
  label: string;
  value: string;
}

export interface OfferedService extends OfferedServiceApi {}

export enum AppointmentType {
  Free,
  Reserved,
}

export interface ArtistProgramEntry {
  date: string;
  startTime: string;
  endTime: string;
}

export interface ArtistResponseApi {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  category: string;
  phone: string;
  bio: string;
  offeredServices: OfferedService[];
  scheduledDates: string[];
  profilePicture: string;
  likes: number;
  appointmentsCount: number;
  rating: number;
  programEntries: ArtistProgramEntry[];
  birthDate: string;
}

export interface Appointment extends AppointmentApi {
  requestStatus?: RequestStatus;
}

export interface Client {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  bio: string;
  birthDate: string;
  profilePicture: string;
  latestAppointments: AppointmentApi[];
}

export interface Artist extends ArtistApi {
  posts: {
    byId: number[];
    requestStatus: RequestStatus;
    pageable: Pageable;
  };
}

export interface Post extends PostApi {
  requestStatus: RequestStatus;
}

export interface Post extends PostApi {
  requestStatus: RequestStatus;
}

export interface Review extends ReviewApi {}

export interface Review extends ReviewApi {}

// nu am pus toate prorietatile unei pagini
export interface Page<T> {
  content: T[];
  last: boolean;
  numberOfElements: number;
  size: number;
}

declare global {
  interface FormDataValue {
    uri: string;
    name: string;
    type: string;
  }

  interface FormData {
    append(name: string, value: FormDataValue, fileName?: string): void;
    set(name: string, value: FormDataValue, fileName?: string): void;
  }
}

export type RequestStatus =
  | 'initial-loading'
  | 'loading'
  | 'success'
  | 'failure'
  | undefined;

export interface Review {
  id: number;
  artistId: number;
  clientId: number;
  name: string;
  avatar: string;
  rating: number;
  description: string;
  date: string;
}

export interface Pageable {
  pageNumber: number;
  last: boolean;
}

export interface ArtistData {
  artistPicture: string;
  rating: number;
  name: string;
  reviewsCount: number;
  category: Category;
}

export type ShareByAppOption = typeof SHARE_APPS_BY_OPTIONS[number];

export interface AppPackageData {
  packageName: string;
  urlScheme: string;
  urlParams: string;
}

export interface Interval {
  startTime: string;
  endTime: string;
}
