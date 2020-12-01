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

export interface OfferedService {
  name: string;
  category: string;
  description: string;
  price: number;
  duration: number;
  id: number;
  currency: Currency;
}

export enum AppointmentType {
  Free,
  Reserved,
}

export interface ArtistProgramEntry {
  date: string;
  startTime: string;
  endTime: string;
}

export interface Post {
  id: number;
  description: string;
  pictures: string[];
  artistId: number;
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

export interface Client {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  bio: string;
  birthDate: string;
  profilePicture: string;
  latestAppointments: Appointment[];
}

export interface Artist {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  category: Category;
  phone: string;
  bio: string;
  offeredServices: any[];
  profilePicture?: string;
  rating: number;
  saves: number;
  appointmentsCount: number;
  programEntries: any[];
  defaultProgram: any[];
  scheduledDates: any[];
  reviewsCount: number;
  birthDate: string;
}

export interface Appointment {
  id?: number;
  artistId?: number;
  clientId?: number;
  serviceId?: number;
  clientName?: string;
  photo?: string;
  serviceName?: string;
  startingTime: string;
  endingTime: string;
  cost?: number;
  currency: Currency;
  type: AppointmentType;
  date: string;
  artistName?: string;
  artistPhoto?: string;
  category?: Category;
}
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
