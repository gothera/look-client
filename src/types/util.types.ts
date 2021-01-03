import { FlatListProps, ListRenderItem } from 'react-native';

export interface TabRoute {
  key: string;
  title: string;
}

export interface FlatListPropsCustom<ItemT>
  extends Partial<FlatListProps<ItemT>> {
  data?: ReadonlyArray<ItemT> | null | undefined;
  renderItem?: ListRenderItem<ItemT> | null | undefined;
}
