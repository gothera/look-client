import * as artistsTypes from './artists.types';
import * as artistsConstants from './artists.constants';
import { Artist, Category, Pageable, Post } from '../../types';
import { ThunkResult } from '../store.types';
import * as ArtistService from '../../services/api/ArtistService';
import * as PostService from '../../services/api/PostService';

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
  return async (dispatch, _) => {
    dispatch(fetchCategoryArtistsRequest(category, isInitialLoading));

    return ArtistService.getCategoryArtists(category, nextPage)
      .then((response) => {
        const artists = response.content.map((artist): Artist => {
          return {
            ...artist,
            posts: {
              byId: [],
              pageable: {
                pageNumber: 0,
                last: false
              },
              requestStatus: undefined
            }
          }
        });
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

// Fetch Artist Posts

const fetchArtistPostsRequest = (
  artistId: number,
  isInitialLoading: boolean,
): artistsTypes.FetchArtistPostsRequest => {
  return {
    type: artistsConstants.FETCH_ARTIST_POSTS_REQUEST,
    payload: { artistId, isInitialLoading },
  };
};

const fetchArtistPostsSuccess = (
  artistId: number,
  posts: Post[],
  pageable: Pageable,
): artistsTypes.FetchArtistPostsSuccess => {
  return {
    type: artistsConstants.FETCH_ARTIST_POSTS_SUCCESS,
    payload: { artistId, posts, pageable },
  };
};

const fetchArtistPostsFailure = (
  artistId: number,
): artistsTypes.FetchArtistPostsFailure => {
  return {
    type: artistsConstants.FETCH_ARTIST_POSTS_FAILURE,
    payload: { artistId },
  };
};

export const fetchArtistPosts = (
  artistId: number,
  nextPage: number,
  isInitialLoading: boolean,
): ThunkResult<void> => {
  return async (dispatch, _) => {
    dispatch(fetchArtistPostsRequest(artistId, isInitialLoading));
    return PostService.getArtistPosts(artistId, nextPage)
      .then((response) => {
        const posts = response.content.map(
          (post): Post => ({
            ...post,
            requestStatus: 'initial-loading',
          }),
        );
        const pageable: Pageable = {
          pageNumber: response.number,
          last: response.last,
        };
        dispatch(fetchArtistPostsSuccess(artistId, posts, pageable));
      })
      .catch((error) => {
        console.log('fetch artist posts error', error);
        dispatch(fetchArtistPostsFailure(artistId));
      });
  };
};


// Fetch Saved Category Artists

const fetchCategorySavedArtistsRequest = (
  category: Category,
  isInitialLoading: boolean,
): artistsTypes.FetchCategorySavedArtistsRequest => {
  return {
    type: artistsConstants.FETCH_CATEGORY_SAVED_ARTISTS_REQUEST,
    payload: { category, isInitialLoading },
  };
};

const fetchCategorySavedArtistsSuccess = (
  category: Category,
  artists: Artist[],
  pageable: Pageable,
): artistsTypes.FetchCategorySavedArtistsSuccess => {
  return {
    type: artistsConstants.FETCH_CATEGORY_SAVED_ARTISTS_SUCCESS,
    payload: { category, artists, pageable },
  };
};

const fetchCategorySavedArtistsFailure = (
  category: Category,
): artistsTypes.FetchCategorySavedArtistsFailure => {
  return {
    type: artistsConstants.FETCH_CATEGORY_SAVED_ARTISTS_FAILURE,
    payload: { category },
  };
};

export const fetchSavedCategoryArtists = (
  category: Category,
  isInitialLoading: boolean,
  nextPage: number,
): ThunkResult<void> => {
  return async (dispatch, _) => {
    dispatch(fetchCategorySavedArtistsRequest(category, isInitialLoading));

    return ArtistService.getCategorySavedArtists(category, nextPage)
      .then((response) => {
        const artists = response.content.map((artist): Artist => {
          return {
            ...artist,
            posts: {
              byId: [],
              pageable: {
                pageNumber: 0,
                last: false
              },
              requestStatus: undefined
            }
          }
        });
        const pageable: Pageable = {
          pageNumber: response.number,
          last: response.last,
        };

        dispatch(fetchCategorySavedArtistsSuccess(category, artists, pageable));
      })
      .catch((error) => {
        console.log('== error ==', error);
        dispatch(fetchCategorySavedArtistsFailure(category));
      });
  };
};
// Save Artist

const saveArtistAction = (artistId: number): artistsTypes.SaveArtistAction => ({
  type: artistsConstants.SAVE_ARTIST_ACTION,
  payload: { artistId },
});

export const saveArtist = (
  artistId: number,
  onRequestFinish?: () => void,
): ThunkResult<void> => {
  return async (dispatch, _) => {
    return ArtistService.saveArtist(artistId)
      .then(() => {
        dispatch(saveArtistAction(artistId));
      })
      .catch((err) => {
        console.log('save artist error', err);
      })
      .finally(() => {
        onRequestFinish?.();
      });
  };
};

// Unsave Artist

const unsaveArtistAction = (
  artistId: number,
): artistsTypes.UnsaveArtistAction => ({
  type: artistsConstants.UNSAVE_ARTIST_ACTION,
  payload: { artistId },
});

export const unsaveArtist = (
  artistId: number,
  onRequestFinish?: () => void,
): ThunkResult<void> => {
  return async (dispatch, _) => {
    return ArtistService.unsaveArtist(artistId)
      .then(() => {
        dispatch(unsaveArtistAction(artistId));
      })
      .catch((err) => {
        console.log('unsave artist error', err);
      })
      .finally(() => {
        onRequestFinish?.();
      });
  };
};
