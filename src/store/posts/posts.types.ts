import { Category, Pageable, Post } from '../../types';
import * as postConstants from './posts.constants';

export interface FetchPostRequest {
  type: typeof postConstants.FETCH_POST_REQUEST;
  payload: {
    postId: number;
  };
}

export interface FetchPostFailure {
  type: typeof postConstants.FETCH_POST_FAILURE;
  payload: {
    postId: number;
  };
}

export interface FetchPostSuccess {
  type: typeof postConstants.FETCH_POST_SUCCESS;
  payload: {
    post: Post;
  };
}

export interface UnsavePostAction {
  type: typeof postConstants.UNSAVE_POST_ACTION;
  payload: {
    postId: number;
  };
}

export interface SavePostAction {
  type: typeof postConstants.SAVE_POST_ACTION;
  payload: {
    postId: number;
  };
}

export interface FetchCategorySavedPostsRequest {
  type: typeof postConstants.FETCH_CATEGORY_SAVED_POSTS_REQUEST;
  payload: { category: Category; isInitialLoading: boolean };
}

export interface FetchCategorySavedPostsSuccess {
  type: typeof postConstants.FETCH_CATEGORY_SAVED_POSTS_SUCCESS;
  payload: { category: Category; posts: Post[]; pageable: Pageable };
}

export interface FetchCategorySavedPostsFailure {
  type: typeof postConstants.FETCH_CATEGORY_SAVED_POSTS_FAILURE;
  payload: { category: Category };
}

export type PostsActions =
  | FetchPostRequest
  | FetchPostFailure
  | FetchPostSuccess
  | UnsavePostAction
  | SavePostAction
  | FetchCategorySavedPostsRequest
  | FetchCategorySavedPostsSuccess
  | FetchCategorySavedPostsFailure;
