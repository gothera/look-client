import React from 'react';
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PostsColumnList from '../../../../components/posts/posts-column-list/PostsColumnList';
import { SCREEN_HEIGHT } from '../../../../res/constants';
import { fetchArtistPosts } from '../../../../store/artists/artists.actions';
import { selectArtistById } from '../../../../store/artists/artists.selectors';
import { AsyncDispatch } from '../../../../store/store.types';
import ArtistGalleryEmptyList from './ArtistGalleryEmptyList';

interface OwnProps {
  componentId: string;
  artistId: number;
  headerHeight: number;
  onMomentumScrollBegin: () => void;
  onMomentumScrollEnd: () => void;
  onScrollEndDrag: () => void;
  onGetRef: (ref: FlatList) => void;
  onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
}

const ArtistGalleryList: React.FC<OwnProps> = ({
  componentId,
  artistId,
  headerHeight,
  onMomentumScrollBegin,
  onMomentumScrollEnd,
  onScrollEndDrag,
  onGetRef,
  onScroll,
}) => {
  const dispatch = useDispatch<AsyncDispatch>();

  React.useEffect(() => {
    dispatch(fetchArtistPosts(artistId, 0, true));
  }, []);

  const artist = useSelector(selectArtistById(artistId));

  const { posts } = artist;

  const onEndReached = () => {
    if (
      posts === undefined ||
      posts?.requestStatus === undefined ||
      posts?.requestStatus === 'initial-loading' ||
      posts?.requestStatus === 'loading' ||
      posts?.pageable === undefined ||
      posts?.pageable.last
    ) {
      return;
    }

    dispatch(fetchArtistPosts(artistId, posts?.pageable.pageNumber + 1, false));
  };

  return (
    <>
      <PostsColumnList
        componentId={componentId}
        data={posts?.byId || []}
        onScroll={onScroll}
        contentContainerStyle={{
          paddingTop: headerHeight + 60,
          paddingBottom: SCREEN_HEIGHT - headerHeight,
        }}
        onEndReached={onEndReached}
        onMomentumScrollBegin={onMomentumScrollBegin}
        onMomentumScrollEnd={onMomentumScrollEnd}
        onScrollEndDrag={onScrollEndDrag}
        onGetRef={onGetRef}
        ListEmptyComponent={<ArtistGalleryEmptyList />}
      />
    </>
  );
};

export default ArtistGalleryList;
