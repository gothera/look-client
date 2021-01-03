import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HeartIcon, HeartIconFilled } from '../../../../res/svg';
import { selectPostById } from '../../../../store/posts/posts.selectors';
import { AsyncDispatch } from '../../../../store/store.types';
import AnimatedHeaderCircleButton from '../../../../components/header/animated-header-circle-button/AnimatedHeaderCircleButton';
import { savePost, unsavePost } from '../../../../store/posts/posts.actions';

interface OwnProps {
  postId: number;
}

const PostSaveButton: React.FC<OwnProps> = ({ postId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const post = useSelector(selectPostById(postId));
  const dispatch = useDispatch<AsyncDispatch>();
  const onFinishRequest = () => setIsLoading(false);
  const onPress = () => {
    if (isLoading) return;
    setIsLoading(true);
    post.isSaved
      ? dispatch(unsavePost(postId, onFinishRequest))
      : dispatch(savePost(postId, onFinishRequest));
  };
  return (
    <AnimatedHeaderCircleButton onPress={onPress}>
      {(post.isSaved && <HeartIconFilled />) || <HeartIcon />}
    </AnimatedHeaderCircleButton>
  );
};

export default PostSaveButton;
