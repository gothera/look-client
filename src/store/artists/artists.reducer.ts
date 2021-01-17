import initialState from '../initialState';
import { ArtistsState, TAction } from '../store.types';
import * as profileConstants from '../profile/profile.constants';
import * as artistsConstants from './artists.constants';
import { Category } from '../../types';
import { addArrayToDictByProp } from '../../utils/global';

const getInitialState = () => Object.assign({}, initialState.artists);

const artistsReducer = (
  state = getInitialState(),
  action: TAction,
): ArtistsState => {
  switch (action.type) {
    case profileConstants.INVALIDATE_STORE: {
      return getInitialState();
    }

    case profileConstants.POST_LOGOUT: {
      return getInitialState();
    }

    case artistsConstants.FETCH_CATEGORY_ARTISTS_REQUEST: {
      const { category, isInitialLoading } = action.payload;

      return {
        ...state,
        explore: {
          ...state.explore,
          ...(category === Category.Makeup && {
            makeup: {
              ...state.explore.makeup,
              requestStatus: isInitialLoading ? 'initial-loading' : 'loading',
            },
          }),
          ...(category === Category.Nails && {
            nails: {
              ...state.explore.nails,
              requestStatus: isInitialLoading ? 'initial-loading' : 'loading',
            },
          }),
          ...(category === Category.Hair && {
            hair: {
              ...state.explore.hair,
              requestStatus: isInitialLoading ? 'initial-loading' : 'loading',
            },
          }),
          ...(category === Category.Eyebrows && {
            eyebrows: {
              ...state.explore.eyebrows,
              requestStatus: isInitialLoading ? 'initial-loading' : 'loading',
            },
          }),
          ...(category === Category.BodyCare && {
            bodyCare: {
              ...state.explore.bodyCare,
              requestStatus: isInitialLoading ? 'initial-loading' : 'loading',
            },
          }),
          ...(category === Category.Lashes && {
            lashes: {
              ...state.explore.lashes,
              requestStatus: isInitialLoading ? 'initial-loading' : 'loading',
            },
          }),
        },
      };
    }

    case artistsConstants.FETCH_CATEGORY_ARTISTS_SUCCESS: {
      const { category, artists, pageable } = action.payload;

      const artistsById = artists.map((artist) => artist.id);

      const isFirstPage = pageable.pageNumber === 0;

      return {
        ...state,
        local: {
          ...addArrayToDictByProp(state.local, artists),
        },
        explore: {
          ...state.explore,
          ...(category === Category.Makeup && {
            makeup: {
              ...state.explore.makeup,
              byId: isFirstPage
                ? artistsById
                : [
                    ...new Set([
                      ...(state.explore.makeup.byId || []),
                      ...artistsById,
                    ]),
                  ],
              pageable: pageable,
              requestStatus: 'success',
            },
          }),
          ...(category === Category.Nails && {
            nails: {
              ...state.explore.nails,
              byId: isFirstPage
                ? artistsById
                : [
                    ...new Set([
                      ...(state.explore.nails.byId || []),
                      ...artistsById,
                    ]),
                  ],
              pageable: pageable,
              requestStatus: 'success',
            },
          }),
          ...(category === Category.Hair && {
            hair: {
              ...state.explore.hair,
              byId: isFirstPage
                ? artistsById
                : [
                    ...new Set([
                      ...(state.explore.hair.byId || []),
                      ...artistsById,
                    ]),
                  ],
              pageable: pageable,
              requestStatus: 'success',
            },
          }),
          ...(category === Category.Eyebrows && {
            eyebrows: {
              ...state.explore.eyebrows,
              byId: isFirstPage
                ? artistsById
                : [
                    ...new Set([
                      ...(state.explore.eyebrows.byId || []),
                      ...artistsById,
                    ]),
                  ],
              pageable: pageable,
              requestStatus: 'success',
            },
          }),
          ...(category === Category.BodyCare && {
            bodyCare: {
              ...state.explore.bodyCare,
              byId: isFirstPage
                ? artistsById
                : [
                    ...new Set([
                      ...(state.explore.bodyCare.byId || []),
                      ...artistsById,
                    ]),
                  ],
              pageable: pageable,
              requestStatus: 'success',
            },
          }),
          ...(category === Category.Lashes && {
            lashes: {
              ...state.explore.lashes,
              byId: isFirstPage
                ? artistsById
                : [
                    ...new Set([
                      ...(state.explore.lashes.byId || []),
                      ...artistsById,
                    ]),
                  ],
              pageable: pageable,
              requestStatus: 'success',
            },
          }),
        },
      };
    }

    case artistsConstants.FETCH_CATEGORY_ARTISTS_FAILURE: {
      const { category } = action.payload;

      return {
        ...state,
        explore: {
          ...state.explore,
          ...(category === Category.Makeup && {
            makeup: { ...state.explore.makeup, requestStatus: 'failure' },
          }),
          ...(category === Category.Nails && {
            nails: { ...state.explore.nails, requestStatus: 'failure' },
          }),
          ...(category === Category.Hair && {
            hair: { ...state.explore.hair, requestStatus: 'failure' },
          }),
          ...(category === Category.Eyebrows && {
            eyebrows: { ...state.explore.eyebrows, requestStatus: 'failure' },
          }),
          ...(category === Category.BodyCare && {
            bodyCare: { ...state.explore.bodyCare, requestStatus: 'failure' },
          }),
          ...(category === Category.Lashes && {
            lashes: { ...state.explore.lashes, requestStatus: 'failure' },
          }),
        },
      };
    }

    case artistsConstants.FETCH_ARTIST_POSTS_REQUEST: {
      const { artistId, isInitialLoading } = action.payload;

      return {
        ...state,
        local: {
          ...state.local,
          [artistId]: {
            ...state.local[artistId],
            posts: {
              ...state.local[artistId].posts,
              requestStatus: isInitialLoading ? 'initial-loading' : 'loading',
            },
          },
        },
      };
    }

    case artistsConstants.FETCH_ARTIST_POSTS_SUCCESS: {
      const { artistId, posts, pageable } = action.payload;

      const postsIds = posts.map((post) => post.id);

      return {
        ...state,
        local: {
          ...state.local,
          [artistId]: {
            ...state.local[artistId],
            posts: {
              ...state.local[artistId].posts,
              requestStatus: 'success',
              pageable: pageable,
              byId: [
                ...new Set([
                  ...(state.local[artistId].posts?.byId || []),
                  ...postsIds,
                ]),
              ],
            },
          },
        },
      };
    }

    case artistsConstants.FETCH_ARTIST_POSTS_FAILURE: {
      const { artistId } = action.payload;

      return {
        ...state,
        local: {
          ...state.local,
          [artistId]: {
            ...state.local[artistId],
            posts: {
              ...state.local[artistId].posts,
              requestStatus: 'failure',
            },
          },
        },
      };
    }

    case artistsConstants.FETCH_CATEGORY_SAVED_ARTISTS_REQUEST: {
      const { category, isInitialLoading } = action.payload;

      return {
        ...state,
        saved: {
          ...state.saved,
          ...(category === Category.Makeup && {
            makeup: {
              ...state.saved.makeup,
              requestStatus: isInitialLoading ? 'initial-loading' : 'loading',
            },
          }),
          ...(category === Category.Nails && {
            nails: {
              ...state.saved.nails,
              requestStatus: isInitialLoading ? 'initial-loading' : 'loading',
            },
          }),
          ...(category === Category.Hair && {
            hair: {
              ...state.saved.hair,
              requestStatus: isInitialLoading ? 'initial-loading' : 'loading',
            },
          }),
          ...(category === Category.Eyebrows && {
            eyebrows: {
              ...state.saved.eyebrows,
              requestStatus: isInitialLoading ? 'initial-loading' : 'loading',
            },
          }),
          ...(category === Category.BodyCare && {
            bodyCare: {
              ...state.saved.bodyCare,
              requestStatus: isInitialLoading ? 'initial-loading' : 'loading',
            },
          }),
          ...(category === Category.Lashes && {
            lashes: {
              ...state.saved.lashes,
              requestStatus: isInitialLoading ? 'initial-loading' : 'loading',
            },
          }),
        },
      };
    }

    case artistsConstants.FETCH_CATEGORY_SAVED_ARTISTS_SUCCESS: {
      const { category, artists, pageable } = action.payload;

      const artistsById = artists.map((artist) => artist.id);

      const isFirstPage = pageable.pageNumber === 0;

      return {
        ...state,
        local: {
          ...addArrayToDictByProp(state.local, artists),
        },
        saved: {
          ...state.saved,
          ...(category === Category.Makeup && {
            makeup: {
              ...state.saved.makeup,
              byId: isFirstPage
                ? artistsById
                : [
                    ...new Set([
                      ...(state.saved.makeup.byId || []),
                      ...artistsById,
                    ]),
                  ],
              pageable: pageable,
              requestStatus: 'success',
            },
          }),
          ...(category === Category.Nails && {
            nails: {
              ...state.saved.nails,
              byId: isFirstPage
                ? artistsById
                : [
                    ...new Set([
                      ...(state.saved.nails.byId || []),
                      ...artistsById,
                    ]),
                  ],
              pageable: pageable,
              requestStatus: 'success',
            },
          }),
          ...(category === Category.Hair && {
            hair: {
              ...state.saved.hair,
              byId: isFirstPage
                ? artistsById
                : [
                    ...new Set([
                      ...(state.saved.hair.byId || []),
                      ...artistsById,
                    ]),
                  ],
              pageable: pageable,
              requestStatus: 'success',
            },
          }),
          ...(category === Category.Eyebrows && {
            eyebrows: {
              ...state.saved.eyebrows,
              byId: isFirstPage
                ? artistsById
                : [
                    ...new Set([
                      ...(state.saved.eyebrows.byId || []),
                      ...artistsById,
                    ]),
                  ],
              pageable: pageable,
              requestStatus: 'success',
            },
          }),
          ...(category === Category.BodyCare && {
            bodyCare: {
              ...state.saved.bodyCare,
              byId: isFirstPage
                ? artistsById
                : [
                    ...new Set([
                      ...(state.saved.bodyCare.byId || []),
                      ...artistsById,
                    ]),
                  ],
              pageable: pageable,
              requestStatus: 'success',
            },
          }),
          ...(category === Category.Lashes && {
            lashes: {
              ...state.saved.lashes,
              byId: isFirstPage
                ? artistsById
                : [
                    ...new Set([
                      ...(state.saved.lashes.byId || []),
                      ...artistsById,
                    ]),
                  ],
              pageable: pageable,
              requestStatus: 'success',
            },
          }),
        },
      };
    }

    case artistsConstants.FETCH_CATEGORY_SAVED_ARTISTS_FAILURE: {
      const { category } = action.payload;

      return {
        ...state,
        saved: {
          ...state.saved,
          ...(category === Category.Makeup && {
            makeup: { ...state.saved.makeup, requestStatus: 'failure' },
          }),
          ...(category === Category.Nails && {
            nails: { ...state.saved.nails, requestStatus: 'failure' },
          }),
          ...(category === Category.Hair && {
            hair: { ...state.saved.hair, requestStatus: 'failure' },
          }),
          ...(category === Category.Eyebrows && {
            eyebrows: { ...state.saved.eyebrows, requestStatus: 'failure' },
          }),
          ...(category === Category.BodyCare && {
            bodyCare: { ...state.saved.bodyCare, requestStatus: 'failure' },
          }),
          ...(category === Category.Lashes && {
            lashes: { ...state.saved.lashes, requestStatus: 'failure' },
          }),
        },
      };
    }

    case artistsConstants.UNSAVE_ARTIST_ACTION: {
      const { artistId } = action.payload;
      return {
        ...state,
        local: {
          ...state.local,
          ...(state.local[artistId] && {
            [artistId]: {
              ...state.local[artistId],
              saved: false,
            },
          }),
        },
        saved: {
          makeup: {
            ...state.saved.makeup,
            byId: state.saved.makeup.byId.filter((id) => id !== artistId),
          },
          nails: {
            ...state.saved.nails,
            byId: state.saved.nails.byId.filter((id) => id !== artistId),
          },
          hair: {
            ...state.saved.hair,
            byId: state.saved.hair.byId.filter((id) => id !== artistId),
          },
          eyebrows: {
            ...state.saved.eyebrows,
            byId: state.saved.eyebrows.byId.filter((id) => id !== artistId),
          },
          bodyCare: {
            ...state.saved.bodyCare,
            byId: state.saved.bodyCare.byId.filter((id) => id !== artistId),
          },
          lashes: {
            ...state.saved.lashes,
            byId: state.saved.lashes.byId.filter((id) => id !== artistId),
          },
        },
      };
    }

    case artistsConstants.SAVE_ARTIST_ACTION: {
      const { artistId } = action.payload;

      return {
        ...state,
        local: {
          ...state.local,
          ...(state.local[artistId] && {
            [artistId]: {
              ...state.local[artistId],
              saved: true,
            },
          }),
        },
      };
    }

    case artistsConstants.FETCH_SERVICES_OF_ARTIST: {
      const { artistId, services } = action.payload;

      return {
        ...state,
        local: {
          ...state.local,
          ...(state.local[artistId] && {
            [artistId]: {
              ...state.local[artistId],
              offeredServices: services,
            },
          }),
        },
      };
    }

    default:
      return state;
  }
};

export default artistsReducer;
