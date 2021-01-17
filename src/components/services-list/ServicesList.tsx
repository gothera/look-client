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
}) => {
  const renderServiceEntry = ({
    item,
    index,
  }: {
    item: OfferedService;
    index: number;
  }) => {
    return <ServiceEntry offeredService={item} componentId={componentId} />;
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
