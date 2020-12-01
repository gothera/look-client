import { Category } from '../../types';
import { ExploreCategoryArtistsResponse } from './api.types';
import { getRequest } from './apiRequest';

export const getCategoryArtists = (
  category: Category,
  page: number,
): Promise<ExploreCategoryArtistsResponse> => {
  const url = `artist/?category=${category}&page=${page}`;

  return getRequest<ExploreCategoryArtistsResponse>(url);
};
