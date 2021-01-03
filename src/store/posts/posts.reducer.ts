import initialState from '../initialState';
import { PostsState, TAction } from '../store.types';
import * as profileConstants from '../profile/profile.constants';
import * as artistsConstants from '../artists/artists.constants';
import { addArrayToDictByProp } from '../../utils/global';
import * as postConstants from './posts.constants';
import { Category } from '../../types';
const getInitialState = () => Object.assign({}, initialState.posts);

const postsReducer = (
  state = getInitialState(),
  action: TAction,
): PostsState => {
  switch (action.type) {
    case profileConstants.INVALIDATE_STORE: {
      return getInitialState();
    }

    case profileConstants.POST_LOGOUT: {
      return getInitialState();
    }

    case artistsConstants.FETCH_ARTIST_POSTS_SUCCESS: {
      const { posts } = action.payload;
      return {
        ...state,
        local: {
          ...addArrayToDictByProp(state.local, posts),
        },
      };
    }

    case postConstants.FETCH_POST_REQUEST: {
      const { postId } = action.payload;
      return {
        ...state,
        local: {
          ...state.local,
          [postId]: {
            ...state.local[postId],
            requestStatus: 'loading',
          },
        },
      };
    }

    case postConstants.FETCH_POST_SUCCESS: {
      const { post } = action.payload;
      return {
        ...state,
        local: {
          ...state.local,
          [post.id]: {
            ...post,
          },
        },
      };
    }

    case postConstants.SAVE_POST_ACTION: {
      const { postId } = action.payload;

      return {
        ...state,
        local: {
          ...state.local,
          [postId]: {
            ...state.local[postId],
            isSaved: true,
          },
        },
      };
    }

    case postConstants.UNSAVE_POST_ACTION: {
      const { postId } = action.payload;

      return {
        ...state,
        local: {
          ...state.local,
          [postId]: {
            ...state.local[postId],
            isSaved: false,
          },
        },
        saved:{
          makeup: {
            ...state.saved.makeup,
            byId: state.saved.makeup.byId.filter((id) => id !== postId),
          },
          nails: {
            ...state.saved.nails,
            byId: state.saved.nails.byId.filter((id) => id !== postId),
          },
          hair: {
            ...state.saved.hair,
            byId: state.saved.hair.byId.filter((id) => id !== postId),
          },
          eyebrows: {
            ...state.saved.eyebrows,
            byId: state.saved.eyebrows.byId.filter((id) => id !== postId),
          },
          bodyCare: {
            ...state.saved.bodyCare,
            byId: state.saved.bodyCare.byId.filter((id) => id !== postId),
          },
          lashes: {
            ...state.saved.lashes,
            byId: state.saved.lashes.byId.filter((id) => id !== postId),
          },
        }
      };
    }

    case postConstants.FETCH_POST_FAILURE: {
      const { postId } = action.payload;

      return {
        ...state,
        local: {
          ...state.local,
          [postId]: {
            ...state.local[postId],
            requestStatus: 'failure',
          },
        },
      };
    }

    case postConstants.FETCH_CATEGORY_SAVED_POSTS_REQUEST: {
      const { category, isInitialLoading } = action.payload;
      return {
        ...state,
          saved:{
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
          }
      };
    }

    case postConstants.FETCH_CATEGORY_SAVED_POSTS_SUCCESS: {
      const { category, posts, pageable } = action.payload;

      const postsById = posts.map((post) => post.id);

      const isFirstPage = pageable.pageNumber === 0;

      return {
        ...state,
        local: {
          ...addArrayToDictByProp(state.local, posts),
        },
        saved: {
          ...state.saved,
          ...(category === Category.Makeup && {
            makeup: {
              ...state.saved.makeup,
              byId: isFirstPage
                ? postsById
                : [...new Set([...(state.saved.makeup.byId || []), ...postsById])],
              pageable: pageable,
              requestStatus: 'success',
            },
          }),
          ...(category === Category.Nails && {
            nails: {
              ...state.saved.nails,
              byId: isFirstPage
                ? postsById
                : [...new Set([...(state.saved.nails.byId || []), ...postsById])],
              pageable: pageable,
              requestStatus: 'success',
            },
          }),
          ...(category === Category.Hair && {
            hair: {
              ...state.saved.hair,
              byId: isFirstPage
                ? postsById
                : [...new Set([...(state.saved.hair.byId || []), ...postsById])],
              pageable: pageable,
              requestStatus: 'success',
            },
          }),
          ...(category === Category.Eyebrows && {
            eyebrows: {
              ...state.saved.eyebrows,
              byId: isFirstPage
                ? postsById
                : [...new Set([...(state.saved.eyebrows.byId || []), ...postsById])],
              pageable: pageable,
              requestStatus: 'success',
            },
          }),
          ...(category === Category.BodyCare && {
            bodyCare: {
              ...state.saved.bodyCare,
              byId: isFirstPage
                ? postsById
                : [...new Set([...(state.saved.bodyCare.byId || []), ...postsById])],
              pageable: pageable,
              requestStatus: 'success',
            },
          }),
          ...(category === Category.Lashes && {
            lashes: {
              ...state.saved.lashes,
              byId: isFirstPage
                ? postsById
                : [...new Set([...(state.saved.lashes.byId || []), ...postsById])],
              pageable: pageable,
              requestStatus: 'success',
            },
          }),
        }
      };
    }

    case artistsConstants.FETCH_CATEGORY_ARTISTS_FAILURE: {
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
        }
      };
    }

    default:
      return state;
  }
};

export default postsReducer;
