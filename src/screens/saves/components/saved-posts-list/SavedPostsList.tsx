import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostsColumnList from '../../../../components/posts/posts-column-list/PostsColumnList';
import { fetchSavedPostsByCategory } from '../../../../store/posts/posts.actions';
import { selectSavedPostsByCategory } from '../../../../store/posts/posts.selectors';
import { AsyncDispatch } from '../../../../store/store.types';
import { Category } from '../../../../types';
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
      posts.requestStatus === 'initial-loading'
    )
      return;
    dispatch(
      fetchSavedPostsByCategory(
        category,
        isInitialLoading,
        posts.pageable?.pageNumber || 0,
      ),
    );
  };

  useEffect(() => {
    shouldFetch && fetchMoreSaved(true);
  }, [category, shouldFetch]);

  return (
    <PostsColumnList
      data={posts.byId}
      componentId={componentId}
      onEndReached={() => fetchMoreSaved(false)}
    />
  );
};

export default SavedPostsList;
