import { Category } from '../../types';
import {
  ExploreCategoryArtistsResponse,
  OfferedServiceApi,
  FreeIntervalHoursApi,
} from './api.types';
import { deleteRequest, getRequest, postRequest } from './apiRequest';

export const getCategoryArtists = (
  category: Category,
  page: number,
): Promise<ExploreCategoryArtistsResponse> => {
  const url = `artist/?category=${category}&page=${page}`;

  return getRequest<ExploreCategoryArtistsResponse>(url);
};

export const getCategorySavedArtists = (
  category: Category,
  page: number,
): Promise<ExploreCategoryArtistsResponse> => {
  const url = `client/artists?category=${category}&page=${page}`;

  return getRequest<ExploreCategoryArtistsResponse>(url);
};

export const saveArtist = (artistId: number): Promise<void> => {
  const url = `client/client/${artistId}/save/`;
  return postRequest<void>(url);
};

export const unsaveArtist = (artistId: number): Promise<void> => {
  const url = `client/client/${artistId}/save/`;
  return deleteRequest<void>(url);
};

export const getServicesOfArtist = (
  artistId: number,
): Promise<OfferedServiceApi[]> => {
  const url = `artist/services/${artistId}`;

  return getRequest<OfferedServiceApi[]>(url);
};

export const getFreeIntervalHoursOfMonth = (
  artistId: number,
  date: string,
  nextMonth: boolean,
): Promise<FreeIntervalHoursApi[]> => {
  const url = `client/calendar/spots/${artistId}/${date}?nextMonth=${nextMonth}`;

  return getRequest<FreeIntervalHoursApi[]>(url);
};

export const getFreeIntervalHoursOfDay = (
  artistId: number,
  date: string,
): Promise<FreeIntervalHoursApi> => {
  const url = `client/free/spots/${artistId}/${date}`;

  return getRequest<FreeIntervalHoursApi>(url);
};
