import React, { useRef } from 'react';
import { Animated } from 'react-native';
import PostArtistRow from './components/post-artist-row/PostArtistRow';
import PostDetails from './components/post-details/PostDetails';
import PostModalHeader from './components/post-modal-header/PostModalHeader';
import PostModalImages from './components/post-modal-images/PostModalImages';
import { styles } from './styles';

interface OwnProps {
  componentId: string;
}

const PostModal: React.FC<OwnProps> = ({ componentId }) => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const onScroll = useRef(
    Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
      useNativeDriver: true,
    }),
  ).current;

  return (
    <>
      <PostModalHeader componentId={componentId} scrollY={scrollY} />
      <Animated.ScrollView style={styles.container} onScroll={onScroll}>
        <PostModalImages scrollY={scrollY} />
        <PostArtistRow />
        <PostDetails />
      </Animated.ScrollView>
    </>
  );
};

export default PostModal;
