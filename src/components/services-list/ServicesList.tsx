import React from 'react';
import {
  View,
  Text,
  Animated,
  StyleProp,
  ViewStyle,
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import { showBookingModal } from '../../navigation';
import { OfferedService } from '../../types';
import ServiceEntry from '../service/service-entry/ServiceEntry';
import LineDivider from '../ui/LineDivider';
import { styles } from './style';

interface OwnProps {
  offeredServices: OfferedService[];
  componentId: string;
  contentContainerStyle?: StyleProp<ViewStyle>;
  onMomentumScrollBegin?: () => void;
  onMomentumScrollEnd?: () => void;
  onScrollEndDrag?: () => void;
  onGetRef?: (ref: FlatList) => void;
  onScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  artistId: number;
}

const ServicesList: React.FC<OwnProps> = ({
  offeredServices,
  componentId,
  contentContainerStyle,
  onMomentumScrollBegin,
  onMomentumScrollEnd,
  onScrollEndDrag,
  onGetRef,
  onScroll,
  artistId,
}) => {
  const renderServiceEntry = ({
    item,
    index,
  }: {
    item: OfferedService;
    index: number;
  }) => {
    const initialServiceId = item.id;

    const goToBooking = () => {
      showBookingModal({ props: { artistId, initialServiceId } });
    };

    return <ServiceEntry offeredService={item} onBookPress={goToBooking} />;
  };

  const ListEmptyComponent = (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>No services added</Text>
    </View>
  );

  return (
    <Animated.FlatList
      data={offeredServices}
      renderItem={renderServiceEntry}
      contentContainerStyle={contentContainerStyle}
      ListEmptyComponent={ListEmptyComponent}
      ItemSeparatorComponent={LineDivider}
      onMomentumScrollBegin={onMomentumScrollBegin}
      onMomentumScrollEnd={onMomentumScrollEnd}
      onScrollEndDrag={onScrollEndDrag}
      ref={onGetRef}
      onScroll={onScroll}
      showsVerticalScrollIndicator={false}
      keyExtractor={(i: OfferedService) => `service-${i.id}`}
    />
  );
};

export default ServicesList;
