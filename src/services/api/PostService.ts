import { Category } from '../../types';
import { ArtistPostsResponse, CategorySavedPostsResponse, PostApi } from './api.types';
import { deleteRequest, getRequest, postRequest } from './apiRequest';

export const getArtistPosts = (
  artistId: number,
  page: number,
): Promise<ArtistPostsResponse> => {
  const url = `post/artist/posts/${artistId}?page=${page}`;
  return getRequest<ArtistPostsResponse>(url);
};

export const getPost = (postId: number): Promise<PostApi> => {
  const url = `post/get/${postId}`;
  return getRequest<PostApi>(url);
}

export const savePost = (postId: number): Promise<void> => {
  const url = `client/post/${postId}/save`;
  return postRequest<void>(url);
}

export const unsavePost = (postId: number): Promise<void> => {
  const url = `client/post/${postId}/save`;
  return deleteRequest<void>(url);
}

export const getSavedPostsByCategory = (category: Category, nextPage: number): Promise<CategorySavedPostsResponse> => {
  const url = `client/posts?page=${nextPage}&category=${category}`
  return getRequest<CategorySavedPostsResponse>(url);
}