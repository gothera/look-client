import { createSelector } from 'reselect';
import { Category } from '../../types';
import { StoreState } from '../store.types';

export const selectLocalPosts = (state: StoreState) => state.posts.local;

export const selectPostById = (postId: number) =>
  createSelector([selectLocalPosts], (localPosts) => localPosts[postId]);

export const selectPostsMakeup = (state: StoreState) => state.posts.saved.makeup;

export const selectPostsHair = (state: StoreState) => state.posts.saved.hair;

export const selectPostsNails = (state: StoreState) => state.posts.saved.nails;

export const selectPostsEyebrows = (state: StoreState) =>
  state.posts.saved.eyebrows;

export const selectPostsBodyCare = (state: StoreState) =>
  state.posts.saved.bodyCare;

export const selectPostsLashes = (state: StoreState) => state.posts.saved.lashes;

export const selectSavedPostsByCategory = (category: Category) =>
  createSelector(
    [
      selectPostsMakeup,
      selectPostsHair,
      selectPostsNails,
      selectPostsEyebrows,
      selectPostsBodyCare,
      selectPostsLashes,
    ],
    (
      postsMakeup,
      postsHair,
      postsNails,
      postsEyebrows,
      postsBodyCare,
      postsLashes,
    ) => {
      switch (category) {
        case Category.Makeup:
          return postsMakeup;
        case Category.Nails:
          return postsNails;
        case Category.Hair:
          return postsHair;
        case Category.Eyebrows:
          return postsEyebrows;
        case Category.BodyCare:
          return postsBodyCare;
        case Category.Lashes:
          return postsLashes;
      }
    },
  );