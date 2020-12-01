import * as artistsTypes from './artists.types';
import * as artistsConstants from './artists.constants';
import { Artist, Category, Pageable } from '../../types';
import { ThunkResult } from '../store.types';
import * as ArtistService from '../../services/api/ArtistService';

// Fetch Category Artists

const fetchCategoryArtistsRequest = (
  category: Category,
  isInitialLoading: boolean,
): artistsTypes.FetchCategoryArtistsRequest => {
  return {
    type: artistsConstants.FETCH_CATEGORY_ARTISTS_REQUEST,
    payload: { category, isInitialLoading },
  };
};

const fetchCategoryArtistsSuccess = (
  category: Category,
  artists: Artist[],
  pageable: Pageable,
): artistsTypes.FetchCategoryArtistsSuccess => {
  return {
    type: artistsConstants.FETCH_CATEGORY_ARTISTS_SUCCESS,
    payload: { category, artists, pageable },
  };
};

const fetchCategoryArtistsFailure = (
  category: Category,
): artistsTypes.FetchCategoryArtistsFailure => {
  return {
    type: artistsConstants.FETCH_CATEGORY_ARTISTS_FAILURE,
    payload: { category },
  };
};

export const fetchCategoryArtists = (
  category: Category,
  isInitialLoading: boolean,
  nextPage: number,
): ThunkResult<void> => {
  return async function (dispatch, _) {
    dispatch(fetchCategoryArtistsRequest(category, isInitialLoading));

    return ArtistService.getCategoryArtists(category, nextPage)
      .then((response) => {
        const artists = response.content;
        const pageable: Pageable = {
          pageNumber: response.number,
          last: response.last,
        };

        dispatch(fetchCategoryArtistsSuccess(category, artists, pageable));
      })
      .catch((error) => {
        console.log('== error ==', error);
        dispatch(fetchCategoryArtistsFailure(category));
      });
  };
};
