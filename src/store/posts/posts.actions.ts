import { Category, Pageable, Post } from '../../types';
import { ThunkResult } from '../store.types';
import * as postConstants from './posts.constants';
import * as postTypes from './posts.types';
import * as PostService from '../../services/api/PostService';
import {
  CategorySavedPostsResponse,
  PostApi,
} from '../../services/api/api.types';

// Fetch Post

export const fetchPostRequest = (
  postId: number,
): postTypes.FetchPostRequest => {
  return {
    type: postConstants.FETCH_POST_REQUEST,
    payload: { postId },
  };
};

export const fetchPostFailure = (
  postId: number,
): postTypes.FetchPostFailure => {
  return {
    type: postConstants.FETCH_POST_FAILURE,
    payload: {
      postId,
    },
  };
};

export const fetchPostSuccess = (post: Post): postTypes.FetchPostSuccess => {
  return {
    type: postConstants.FETCH_POST_SUCCESS,
    payload: { post },
  };
};

export const fetchPost = (postId: number): ThunkResult<void> => {
  return async function (dispatch, _) {
    dispatch(fetchPostRequest(postId));

    return PostService.getPost(postId)
      .then((response: PostApi) => {
        const post: Post = {
          ...response,
          requestStatus: 'success',
        };
        dispatch(fetchPostSuccess(post));
      })
      .catch(() => {
        dispatch(fetchPostFailure(postId));
      });
  };
};

// Save Post

const savePostAction = (postId: number): postTypes.SavePostAction => ({
  type: postConstants.SAVE_POST_ACTION,
  payload: { postId },
});

export const savePost = (
  postId: number,
  onRequestFinish?: () => void,
): ThunkResult<void> => {
  return async function (dispatch, _) {
    return PostService.savePost(postId)
      .then(() => {
        dispatch(savePostAction(postId));
        onRequestFinish?.();
      })
      .catch(() => {
        onRequestFinish?.();
      });
  };
};

// Unsave post

const unsavePostAction = (postId: number): postTypes.UnsavePostAction => ({
  type: postConstants.UNSAVE_POST_ACTION,
  payload: { postId },
});

export const unsavePost = (
  postId: number,
  onRequestFinish?: () => void,
): ThunkResult<void> => {
  return async function (dispatch, _) {
    return PostService.unsavePost(postId)
      .then(() => {
        dispatch(unsavePostAction(postId));
        onRequestFinish?.();
      })
      .catch(() => {
        onRequestFinish?.();
      });
  };
};

// Fetch Saved Posts By Category

export const fetchSavedPostsByCategoryRequest = (
  category: Category,
  isInitialLoading: boolean,
): postTypes.FetchCategorySavedPostsRequest => ({
  type: postConstants.FETCH_CATEGORY_SAVED_POSTS_REQUEST,
  payload: {
    category,
    isInitialLoading,
  },
});

export const fetchSavedPostsByCategorySuccess = (
  category: Category,
  posts: Post[],
  pageable: Pageable,
): postTypes.FetchCategorySavedPostsSuccess => ({
  type: postConstants.FETCH_CATEGORY_SAVED_POSTS_SUCCESS,
  payload: {
    category,
    posts,
    pageable,
  },
});

export const fetchSavedPostsByCategoryFailure = (
  category: Category,
): postTypes.FetchCategorySavedPostsFailure => ({
  type: postConstants.FETCH_CATEGORY_SAVED_POSTS_FAILURE,
  payload: {
    category,
  },
});

export const fetchSavedPostsByCategory = (
  category: Category,
  isInitialFetch: boolean,
  nextPage: number,
): ThunkResult<void> => {
  return async function (dispatch, _) {
    dispatch(fetchSavedPostsByCategoryRequest(category, isInitialFetch));

    return PostService.getSavedPostsByCategory(category, nextPage)
      .then((response: CategorySavedPostsResponse) => {
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
        dispatch(fetchSavedPostsByCategorySuccess(category, posts, pageable));
      })
      .catch(() => {
        dispatch(fetchSavedPostsByCategoryFailure(category));
      });
  };
};
