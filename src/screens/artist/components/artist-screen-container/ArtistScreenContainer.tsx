import React, { useEffect, useRef, useState } from 'react';
import { Animated, FlatList } from 'react-native';
import TabListsWithHeader from '../../../../components/ui/tab-lists-with-header/TabListsWithHeader';
import { useViewLayout } from '../../../../hooks';
import { ArtistTabType } from '../../../../types';
import ArtistGalleryList from '../artist-gallery-list/ArtistGalleryList';
import ArtistReviewsList from '../artist-reviews-list/ArtistReviewsList';
import ArtistScreenHeader from '../artist-screen-header/ArtistScreenHeader';
import ArtistServicesList from '../artist-services-list/ArtistServicesList';

interface OwnProps {
  artistId: number;
  componentId: string;
}

const ArtistScreenContainer: React.FC<OwnProps> = ({
  artistId,
  componentId,
}) => {
  const header = <ArtistScreenHeader artistId={artistId} />;

  // header height
  const [headerLayout, onLayoutHeader] = useViewLayout();

  const routes: { key: ArtistTabType; title: string }[] = [
    { key: 'gallery', title: 'Gallery' },
    { key: 'services', title: 'Services' },
    { key: 'reviews', title: 'Reviews' },
  ];

  // sync scroll
  const isScrolling = useRef(false);

  const [tabIndex, setTabIndex] = useState(0);

  const scrollY = useRef(new Animated.Value(0)).current;

  const listRefArr = useRef<{ key: ArtistTabType; value: FlatList<number> }[]>(
    [],
  );
  const listOffset = useRef<Record<string, number>>({});

  useEffect(() => {
    scrollY.addListener(({ value }) => {
      const curRoute = routes[tabIndex].key;
      listOffset.current[curRoute] = value;
    });
    return () => {
      scrollY.removeAllListeners();
    };
  }, [routes, tabIndex]);

  const offsetHeader = headerLayout.height;

  const syncScrollOffset = () => {
    const curRouteKey = routes[tabIndex].key;
    listRefArr.current.forEach((listRef) => {
      if (listRef.key !== curRouteKey) {
        //@ts-ignore
        if (scrollY._value < offsetHeader && scrollY._value >= 0) {
          if (listRef.value) {
            listRef.value.scrollToOffset({
              //@ts-ignore
              offset: scrollY._value,
              animated: false,
            });
            //@ts-ignore
            listOffset.current[listRef.key] = scrollY._value;
          }
          //@ts-ignore
        } else if (scrollY._value >= offsetHeader) {
          if (
            listOffset.current[listRef.key] < offsetHeader ||
            listOffset.current[listRef.key] == null
          ) {
            if (listRef.value) {
              listRef.value.scrollToOffset({
                offset: offsetHeader,
                animated: false,
              });
              listOffset.current[listRef.key] = offsetHeader;
            }
          }
        }
      }
    });
  };

  const onMomentumScrollBegin = () => {
    isScrolling.current = true;
  };

  const onMomentumScrollEnd = () => {
    isScrolling.current = false;
    syncScrollOffset();
  };

  const onScrollEndDrag = () => {
    syncScrollOffset();
  };

  const onGetGalleryListRef = (flatListRef: FlatList) => {
    if (flatListRef) {
      const found = listRefArr.current.find(
        (arrItem) => arrItem.key === 'gallery',
      );
      if (!found) {
        listRefArr.current.push({
          key: 'gallery',
          value: flatListRef,
        });
      }
    }
  };

  const onGetServicesListRef = (flatListRef: FlatList) => {
    if (flatListRef) {
      const found = listRefArr.current.find(
        (arrItem) => arrItem.key === 'services',
      );
      if (!found) {
        listRefArr.current.push({
          key: 'services',
          value: flatListRef,
        });
      }
    }
  };

  const onGetReviewsListRef = (flatListRef: FlatList) => {
    if (flatListRef) {
      const found = listRefArr.current.find(
        (arrItem) => arrItem.key === 'reviews',
      );
      if (!found) {
        listRefArr.current.push({
          key: 'reviews',
          value: flatListRef,
        });
      }
    }
  };

  // gallery list
  const GalleyList =
    headerLayout.height !== 0 ? (
      <ArtistGalleryList
        artistId={artistId}
        componentId={componentId}
        headerHeight={headerLayout.height}
        onMomentumScrollBegin={onMomentumScrollBegin}
        onMomentumScrollEnd={onMomentumScrollEnd}
        onScrollEndDrag={onScrollEndDrag}
        onGetRef={onGetGalleryListRef}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true },
        )}
      />
    ) : null;

  // services list
  const ServicesList = (
    <ArtistServicesList
      artistId={artistId}
      componentId={componentId}
      headerHeight={headerLayout.height}
      onMomentumScrollBegin={onMomentumScrollBegin}
      onMomentumScrollEnd={onMomentumScrollEnd}
      onScrollEndDrag={onScrollEndDrag}
      onGetRef={onGetServicesListRef}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: true },
      )}
    />
  );

  // reviews list
  const ReviewsList = (
    <ArtistReviewsList
      artistId={artistId}
      componentId={componentId}
      headerHeight={headerLayout.height}
      onMomentumScrollBegin={onMomentumScrollBegin}
      onMomentumScrollEnd={onMomentumScrollEnd}
      onScrollEndDrag={onScrollEndDrag}
      onGetRef={onGetReviewsListRef}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: true },
      )}
    />
  );

  const scenes: (JSX.Element | null)[] = [
    GalleyList,
    ServicesList,
    ReviewsList,
  ];

  const onTabIndexChange = (newIndex: number) => {
    setTabIndex(newIndex);
  };

  return (
    <>
      <TabListsWithHeader
        routes={routes}
        headerComponent={header}
        scenes={scenes}
        onLayoutHeader={onLayoutHeader}
        headerHeight={headerLayout.height}
        scrollY={scrollY}
        onTabChange={onTabIndexChange}
        tabIndex={tabIndex}
        isScrolling={isScrolling.current}
      />
    </>
  );
};

export default ArtistScreenContainer;
