import { Category } from '../../types';
import { ExploreCategoryArtistsResponse } from './api.types';
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
