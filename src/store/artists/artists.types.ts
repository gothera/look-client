import { Artist, Category, Pageable, Post } from '../../types';
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

// Fetch Category Saved Artists

export interface FetchCategorySavedArtistsRequest {
  type: typeof artistsConstants.FETCH_CATEGORY_SAVED_ARTISTS_REQUEST;
  payload: { category: Category; isInitialLoading: boolean };
}

export interface FetchCategorySavedArtistsSuccess {
  type: typeof artistsConstants.FETCH_CATEGORY_SAVED_ARTISTS_SUCCESS;
  payload: { category: Category; artists: Artist[]; pageable: Pageable };
}

export interface FetchCategorySavedArtistsFailure {
  type: typeof artistsConstants.FETCH_CATEGORY_SAVED_ARTISTS_FAILURE;
  payload: { category: Category };
}

// Fetch Artist Posts

export interface FetchArtistPostsRequest {
  type: typeof artistsConstants.FETCH_ARTIST_POSTS_REQUEST;
  payload: { artistId: number; isInitialLoading: boolean };
}

export interface FetchArtistPostsSuccess {
  type: typeof artistsConstants.FETCH_ARTIST_POSTS_SUCCESS;
  payload: { artistId: number; posts: Post[]; pageable: Pageable };
}

export interface FetchArtistPostsFailure {
  type: typeof artistsConstants.FETCH_ARTIST_POSTS_FAILURE;
  payload: { artistId: number };
}

// Save Artist
export interface SaveArtistAction {
  type: typeof artistsConstants.SAVE_ARTIST_ACTION;
  payload: { artistId: number };
}

// Unsave Artist
export interface UnsaveArtistAction {
  type: typeof artistsConstants.UNSAVE_ARTIST_ACTION;
  payload: { artistId: number };
}

export type ArtistsAction =
  | FetchCategoryArtistsRequest
  | FetchCategoryArtistsSuccess
  | FetchCategoryArtistsFailure
  | FetchArtistPostsRequest
  | FetchArtistPostsSuccess
  | FetchArtistPostsFailure
  | FetchCategorySavedArtistsRequest
  | FetchCategorySavedArtistsSuccess
  | FetchCategorySavedArtistsFailure
  | SaveArtistAction
  | UnsaveArtistAction;
