import React from 'react';
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import { useSelector } from 'react-redux';
import ServicesList from '../../../../components/services-list/ServicesList';
import { SCREEN_HEIGHT } from '../../../../res/constants';
import { selectArtistById } from '../../../../store/artists/artists.selectors';

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

const ArtistServicesList: React.FC<OwnProps> = ({
  componentId,
  artistId,
  headerHeight,
  onMomentumScrollBegin,
  onMomentumScrollEnd,
  onScrollEndDrag,
  onGetRef,
  onScroll,
}) => {
  const artist = useSelector(selectArtistById(artistId));

  const { offeredServices } = artist;

  return (
    <>
      <ServicesList
        offeredServices={offeredServices}
        componentId={componentId}
        contentContainerStyle={{
          paddingTop: headerHeight + 60,
          paddingBottom: SCREEN_HEIGHT - headerHeight - 60,
        }}
        onMomentumScrollBegin={onMomentumScrollBegin}
        onMomentumScrollEnd={onMomentumScrollEnd}
        onScrollEndDrag={onScrollEndDrag}
        onGetRef={onGetRef}
        onScroll={onScroll}
      />
    </>
  );
};

export default ArtistServicesList;
