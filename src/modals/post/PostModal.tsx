import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost } from '../../store/posts/posts.actions';
import { selectPostById } from '../../store/posts/posts.selectors';
import { AsyncDispatch } from '../../store/store.types';
import PostArtistRow from './components/post-artist-row/PostArtistRow';
import PostDetails from './components/post-details/PostDetails';
import PostModalHeader from './components/post-modal-header/PostModalHeader';
import PostModalImages from './components/post-modal-images/PostModalImages';
import { styles } from './styles';

interface OwnProps {
  componentId: string;
  postId: number;
}

const PostModal: React.FC<OwnProps> = ({ componentId, postId }) => {
  const dispatch = useDispatch<AsyncDispatch>();

  const post = useSelector(selectPostById(postId));

  const scrollY = useRef(new Animated.Value(0)).current;

  const onScroll = useRef(
    Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
      useNativeDriver: true,
    }),
  ).current;

  useEffect(() => {
    dispatch(fetchPost(postId));
  }, []);

  return (
    <>
      <PostModalHeader
        componentId={componentId}
        scrollY={scrollY}
        postId={postId}
      />
      <Animated.ScrollView style={styles.container} onScroll={onScroll}>
        <PostModalImages photos={post.pictures} scrollY={scrollY} />
        <PostArtistRow post={post} />
        <PostDetails />
      </Animated.ScrollView>
    </>
  );
};

export default PostModal;
