import { ArtistReviewsResponse } from './api.types';
import { getRequest } from './apiRequest';

// https://look-backend-staging.herokuapp.com/api/review/artist/get/1?page=0
export const getArtistReviews = (
  artistId: number,
  page: number,
): Promise<ArtistReviewsResponse> => {
  const url = `review/artist/get/${artistId}?page=${page}`;

  return getRequest<ArtistReviewsResponse>(url);
};
