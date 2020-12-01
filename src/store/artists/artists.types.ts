import { Artist, Category, Pageable } from '../../types';
import * as artistsConstants from './artists.constants';

// Fetch Category Artists

export interface FetchCategoryArtistsRequest {
  type: typeof artistsConstants.FETCH_CATEGORY_ARTISTS_REQUEST;
  payload: { category: Category; isInitialLoading: boolean };
}

export interface FetchCategoryArtistsSuccess {
  type: typeof artistsConstants.FETCH_CATEGORY_ARTISTS_SUCCESS;
  payload: { category: Category; artists: Artist[]; pageable: Pageable };
}

export interface FetchCategoryArtistsFailure {
  type: typeof artistsConstants.FETCH_CATEGORY_ARTISTS_FAILURE;
  payload: { category: Category };
}

export type ArtistsAction =
  | FetchCategoryArtistsRequest
  | FetchCategoryArtistsSuccess
  | FetchCategoryArtistsFailure;
