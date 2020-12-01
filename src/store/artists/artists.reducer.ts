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
        ...(category === Category.Makeup && {
          makeup: {
            ...state.makeup,
            requestStatus: isInitialLoading ? 'initial-loading' : 'loading',
          },
        }),
        ...(category === Category.Nails && {
          nails: {
            ...state.nails,
            requestStatus: isInitialLoading ? 'initial-loading' : 'loading',
          },
        }),
        ...(category === Category.Hair && {
          hair: {
            ...state.hair,
            requestStatus: isInitialLoading ? 'initial-loading' : 'loading',
          },
        }),
        ...(category === Category.Eyebrows && {
          eyebrows: {
            ...state.eyebrows,
            requestStatus: isInitialLoading ? 'initial-loading' : 'loading',
          },
        }),
        ...(category === Category.BodyCare && {
          bodyCare: {
            ...state.bodyCare,
            requestStatus: isInitialLoading ? 'initial-loading' : 'loading',
          },
        }),
        ...(category === Category.Lashes && {
          lashes: {
            ...state.lashes,
            requestStatus: isInitialLoading ? 'initial-loading' : 'loading',
          },
        }),
      };
    }

    case artistsConstants.FETCH_CATEGORY_ARTISTS_SUCCESS: {
      const { category, artists, pageable } = action.payload;

      const artistsById = artists.map((artist) => artist.id);

      return {
        ...state,
        local: {
          ...addArrayToDictByProp(state.local, artists),
        },
        ...(category === Category.Makeup && {
          makeup: {
            ...state.makeup,
            byId: [...new Set([...state.makeup.byId, ...artistsById])],
            pageable: pageable,
            requestStatus: 'success',
          },
        }),
        ...(category === Category.Nails && {
          nails: {
            ...state.nails,
            byId: [...new Set([...state.nails.byId, ...artistsById])],
            pageable: pageable,
            requestStatus: 'success',
          },
        }),
        ...(category === Category.Hair && {
          hair: {
            ...state.hair,
            byId: [...new Set([...state.hair.byId, ...artistsById])],
            pageable: pageable,
            requestStatus: 'success',
          },
        }),
        ...(category === Category.Eyebrows && {
          eyebrows: {
            ...state.eyebrows,
            byId: [...new Set([...state.eyebrows.byId, ...artistsById])],
            pageable: pageable,
            requestStatus: 'success',
          },
        }),
        ...(category === Category.BodyCare && {
          bodyCare: {
            ...state.bodyCare,
            byId: [...new Set([...state.bodyCare.byId, ...artistsById])],
            pageable: pageable,
            requestStatus: 'success',
          },
        }),
        ...(category === Category.Lashes && {
          lashes: {
            ...state.lashes,
            byId: [...new Set([...state.lashes.byId, ...artistsById])],
            pageable: pageable,
            requestStatus: 'success',
          },
        }),
      };
    }

    case artistsConstants.FETCH_CATEGORY_ARTISTS_FAILURE: {
      const { category } = action.payload;

      return {
        ...state,
        ...(category === Category.Makeup && {
          makeup: { ...state.makeup, requestStatus: 'failure' },
        }),
        ...(category === Category.Nails && {
          nails: { ...state.nails, requestStatus: 'failure' },
        }),
        ...(category === Category.Hair && {
          hair: { ...state.hair, requestStatus: 'failure' },
        }),
        ...(category === Category.Eyebrows && {
          eyebrows: { ...state.eyebrows, requestStatus: 'failure' },
        }),
        ...(category === Category.BodyCare && {
          bodyCare: { ...state.bodyCare, requestStatus: 'failure' },
        }),
        ...(category === Category.Lashes && {
          lashes: { ...state.lashes, requestStatus: 'failure' },
        }),
      };
    }

    default:
      return state;
  }
};

export default artistsReducer;
