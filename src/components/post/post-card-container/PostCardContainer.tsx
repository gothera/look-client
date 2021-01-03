import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { useSelector } from 'react-redux';
import { showPostModal } from '../../../navigation';
import { selectPostById } from '../../../store/posts/posts.selectors';
import PostCard from '../post-card/PostCard';

interface OwnPros {
  postId: number;
  componentId: string;
  style?: StyleProp<ViewStyle>;
}

const PostCardContainer: React.FC<OwnPros> = ({
  postId,
  componentId,
  style,
}) => {
  const post = useSelector(selectPostById(postId));

  const onPress = () => {
    showPostModal({ props: { postId } });
  };

  return (
    <PostCard
      photo={post.pictures[0]}
      artistFullName={post.artistData.name}
      artistPhoto={post.artistData.artistPicture}
      category={post.artistData.category}
      style={style}
      onPress={onPress}
    />
  );
};

export default PostCardContainer;
