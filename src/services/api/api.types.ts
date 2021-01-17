import { AppointmentType, ArtistData, Interval } from '../../types/globalTypes';
import {
  DaysAbbreviation,
  Currency,
  Category,
  LocationType,
} from '../../types/enums';

export interface UserResponse {
  id: number;
  firstName: string;
  lastName: string;
  profilePictureUrl: string;
  bio: string;
  email: string;
  password: string;
  phone: string;
  type: string;
}

export interface LoginResponse {
  accessToken: string;
  tokenType: string;
}

export interface SignupResponse {
  id: number;
  user: UserResponse;
  offeredServices: any[];
  profilePicture: string;
  category: string;
}

export interface SetupBody {
  firstName: string;
  lastName: string;
  category: string;
  phone?: string;
  name: string; // service name
  description: string;
  price: number;
  duration: number;
  birthDate: string; // ISO string
}

export interface AppointmentResponse {
  id?: number;
  artistId?: number;
  clientId?: number;
  serviceId?: number;
  clientName?: string;
  photo?: string;
  serviceName?: string;
  startingTime: string;
  endingTime: string;
  type: AppointmentType;
  currency: string;
  cost: number;
  date: string;
}

export interface ProgramDefaultElement {
  startTime: string;
  endTime: string;
  day: DaysAbbreviation; // eg 0 = Monday
  artistId: number;
}

export interface ProgramSpecificElement {
  date: string;
  startTime: string;
  endTime: string;
}

export interface UpdateArtistApi {
  firstName: string;
  lastName: string;
  email: string;
  category: string;
  bio: string;
  phone: string;
}

export interface AddOfferedServiceApi {
  name: string;
  category: string;
  description: string;
  price: number;
  duration: number;
  currency: Currency;
}

export interface ExploreCategoryArtistsResponse {
  content: ArtistApi[];
  last: boolean;
  number: number;
}

export interface CategorySavedPostsResponse {
  content: PostApi[];
  last: boolean;
  number: number;
}

export interface OwnAppointmentsResponse {
  content: AppointmentApi[];
  last: boolean;
  number: number;
}

export interface OfferedServiceApi {
  id: number;
  category: Category;
  description: string;
  name: string;
  price: number;
  duration: number;
  currency: Currency;
}

export interface ArtistApi {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  category: Category;
  phone: string;
  bio: string;
  offeredServices: OfferedServiceApi[];
  profilePicture?: string;
  rating: number;
  saves: number;
  appointmentsCount: number;
  programEntries: any[];
  defaultProgram: any[];
  scheduledDates: any[];
  reviewsCount: number;
  birthDate: string;
  saved: boolean;
  latitude?: string;
  longitude?: string;
}

export interface PostApi {
  id: number;
  description: string;
  pictures: string[];
  artistId: number;
  saves: number;
  isSaved: boolean;
  artistData: ArtistData;
}

export interface ArtistPostsResponse {
  content: PostApi[];
  last: boolean;
  number: number;
}

export interface ReviewApi {
  id: number;
  artistId: number;
  clientId: number;
  name: string;
  avatar: string;
  rating: number;
  description: string;
  date: string;
}

export interface ArtistReviewsSummarization {
  reviewsAverage: number;
  reviewsCount: number;
  numberOf1s: number;
  numberOf2s: number;
  numberOf3s: number;
  numberOf4s: number;
  numberOf5s: number;
}

export interface ArtistReviewsResponse {
  content: ReviewApi[];
  last: boolean;
  number: number;
  summarization: ArtistReviewsSummarization;
}

export interface AppointmentApi {
  id: number;
  artistId: number;
  clientId: number;
  serviceId: number;
  clientName: string;
  clientPhoto?: string;
  serviceName: string;
  startingTime: string;
  endingTime: string;
  cost?: number;
  currency: Currency;
  type: AppointmentType;
  date: string;
  artistName: string;
  artistPhoto?: string;
  category: Category;
  latitude: string;
  longitude: string;
  contact: {
    instagram: string;
    phone: string;
  };
  locationType: LocationType;
  cancelled: boolean;
  serviceDescription?: string;
  serviceDuration: number;
}

export interface FreeIntervalHoursApi {
  date: string;
  maximumInterval: number;
  freeSpots: Interval[];
}

export interface CreateAppointment {
  artistId: number;
  clientId: number;
  serviceId: number;
  startingTime: string;
  date: string;
}
