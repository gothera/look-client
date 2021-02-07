import React, { useEffect } from 'react';
import { useNavigationBottomTabSelect } from 'react-native-navigation-hooks/dist';
import { useDispatch, useSelector } from 'react-redux';
import PostsColumnList from '../../../../components/posts/posts-column-list/PostsColumnList';
import { fetchSavedPostsByCategory } from '../../../../store/posts/posts.actions';
import { selectSavedPostsByCategory } from '../../../../store/posts/posts.selectors';
import { AsyncDispatch } from '../../../../store/store.types';
import { Category } from '../../../../types';
import SavedPostsEmptyList from '../saved-posts-empty-list/SavedPostsEmptyList';
interface OwnProps {
  componentId: string;
  category: Category;
  shouldFetch: boolean;
}
const SavedPostsList: React.FC<OwnProps> = ({
  componentId,
  category,
  shouldFetch,
}) => {
  const posts = useSelector(selectSavedPostsByCategory(category));

  const dispatch = useDispatch<AsyncDispatch>();

  const fetchMoreSaved = (isInitialLoading: boolean) => {
    if (
      posts.requestStatus === 'loading' ||
      posts.requestStatus === 'initial-loading' ||
      posts.pageable?.last === true
    ) {
      return;
    }
    dispatch(
      fetchSavedPostsByCategory(
        category,
        isInitialLoading,
        (posts.pageable?.pageNumber || 0) + 1,
      ),
    );
  };

  useEffect(() => {
    shouldFetch && dispatch(fetchSavedPostsByCategory(category, true, 0));
  }, [category, shouldFetch]);

  useNavigationBottomTabSelect((e) => {
    if (e.selectedTabIndex === 1) {
      shouldFetch && fetchMoreSaved(true);
    }
  });

  return (
    <PostsColumnList
      data={posts.byId}
      componentId={componentId}
      onEndReached={() => fetchMoreSaved(false)}
      ListEmptyComponent={SavedPostsEmptyList}
    />
  );
};

export default SavedPostsList;
