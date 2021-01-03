import React, { useEffect, useState } from 'react';
import {
  Animated,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import ReviewEntry from '../../../../components/review/review-entry/ReviewEntry';
import LineDivider from '../../../../components/ui/LineDivider';
import { SCREEN_HEIGHT } from '../../../../res/constants';
import { spacing } from '../../../../theme';
import { Pageable, RequestStatus, Review } from '../../../../types';
import * as ReviewService from '../../../../services/api/ReviewService';
import { ArtistReviewsSummarization } from '../../../../services/api/api.types';
import ArtistReviewsEmptyList from './ArtistReviewsEmptyList';
import ReviewSummarization from '../../../../components/review/review-summarization/ReviewSummarization';
import { styles } from './styles';

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

const ArtistReviewsList: React.FC<OwnProps> = ({
  componentId,
  artistId,
  headerHeight,
  onMomentumScrollBegin,
  onMomentumScrollEnd,
  onScrollEndDrag,
  onGetRef,
  onScroll,
}) => {
  const [reviews, setReviews] = useState<{
    items: Review[];
    requestStatus: RequestStatus;
    summarization?: ArtistReviewsSummarization;
    pageable?: Pageable;
  }>({
    items: [],
    requestStatus: undefined,
    summarization: undefined,
    pageable: undefined,
  });

  useEffect(() => {
    setReviews((prevState) => {
      return {
        items: prevState.items,
        summarization: prevState.summarization,
        requestStatus: 'initial-loading',
      };
    });
    ReviewService.getArtistReviews(artistId, 0)
      .then((response) => {
        const reviewItems = response.content;
        const pageable: Pageable = {
          pageNumber: response.number,
          last: response.last,
        };

        setReviews({
          items: reviewItems,
          summarization: response.summarization,
          requestStatus: 'success',
          pageable: pageable,
        });
      })
      .catch((_) => {
        setReviews((prevState) => {
          return {
            items: prevState.items,
            requestStatus: 'failure',
          };
        });
      });
  }, []);

  const renderReviewEntry = ({
    item,
    index,
  }: {
    item: Review;
    index: number;
  }) => {
    return (
      <ReviewEntry
        userFullName={item.name}
        userPicture={item.avatar}
        rate={item.rating}
        description={item.description}
        date={item.date}
      />
    );
  };

  const onEndReached = () => {
    if (
      reviews?.requestStatus === undefined ||
      reviews?.requestStatus === 'initial-loading' ||
      reviews?.requestStatus === 'loading' ||
      reviews?.pageable === undefined ||
      reviews?.pageable.last
    ) {
      return;
    }

    setReviews((prevState) => {
      return {
        items: prevState.items,
        summarization: prevState.summarization,
        requestStatus: 'loading',
      };
    });
    ReviewService.getArtistReviews(
      artistId,
      reviews.pageable?.pageNumber + 1 || 0,
    )
      .then((response) => {
        const reviewItems = response.content;
        const pageable: Pageable = {
          pageNumber: response.number,
          last: response.last,
        };

        setReviews((prevState) => {
          return {
            items: [...new Set([...prevState.items, ...reviewItems])],
            requestStatus: 'success',
            pageable: pageable,
            summarization: prevState.summarization,
          };
        });
      })
      .catch((_) => {
        setReviews((prevState) => {
          return {
            items: prevState.items,
            requestStatus: 'failure',
          };
        });
      });
  };

  return (
    <>
      <Animated.FlatList
        contentContainerStyle={{
          paddingTop: headerHeight + 60,
          paddingHorizontal: spacing.base,
          paddingBottom: SCREEN_HEIGHT - (headerHeight + 200),
        }}
        data={reviews?.items || []}
        renderItem={renderReviewEntry}
        ItemSeparatorComponent={LineDivider}
        onMomentumScrollBegin={onMomentumScrollBegin}
        onMomentumScrollEnd={onMomentumScrollEnd}
        onScrollEndDrag={onScrollEndDrag}
        ref={onGetRef}
        onScroll={onScroll}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_: Review, index: number) => `service-${index}`}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        ListEmptyComponent={<ArtistReviewsEmptyList />}
        ListHeaderComponent={
          reviews.summarization &&
          reviews?.items.length > 0 && (
            <ReviewSummarization summarization={reviews.summarization} />
          )
        }
        ListHeaderComponentStyle={styles.headerContainer}
      />
    </>
  );
};

export default ArtistReviewsList;
