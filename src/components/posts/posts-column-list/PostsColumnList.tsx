import React from 'react';
import {
  View,
  Animated,
  StyleProp,
  ViewStyle,
  NativeSyntheticEvent,
  NativeScrollEvent,
  FlatList,
} from 'react-native';
import PostCardContainer from '../../post/post-card-container/PostCardContainer';
import { styles } from './styles';

interface OwnProps {
  componentId: string;
  data: number[];
  contentContainerStyle?: StyleProp<ViewStyle>;
  onScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  onEndReached?: () => void;
  onMomentumScrollBegin?: () => void;
  onMomentumScrollEnd?: () => void;
  onScrollEndDrag?: () => void;
  onGetRef?: (ref: FlatList) => void;
  ListEmptyComponent?: JSX.Element;
}

const PostsColumnList: React.FC<OwnProps> = ({
  componentId,
  data = [],
  contentContainerStyle,
  onScroll,
  onEndReached,
  onMomentumScrollBegin,
  onMomentumScrollEnd,
  onScrollEndDrag,
  onGetRef,
  ListEmptyComponent,
}) => {
  const renderPostCard = ({ item, index }: { item: number; index: number }) => {
    return (
      <View style={styles.postContainer}>
        <PostCardContainer
          postId={item}
          componentId={componentId}
          style={
            index % 2 === 0
              ? styles.firstColumnPostContainer
              : styles.secondColumnPostContainer
          }
        />
      </View>
    );
  };

  return (
    <Animated.FlatList
      renderItem={renderPostCard}
      numColumns={2}
      data={data}
      contentContainerStyle={contentContainerStyle}
      showsVerticalScrollIndicator={false}
      onScroll={onScroll}
      keyExtractor={(i: number) => `post-${i}`}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.3}
      onMomentumScrollBegin={onMomentumScrollBegin}
      onMomentumScrollEnd={onMomentumScrollEnd}
      onScrollEndDrag={onScrollEndDrag}
      ref={onGetRef}
      ListEmptyComponent={ListEmptyComponent}
    />
  );
};

export default PostsColumnList;
