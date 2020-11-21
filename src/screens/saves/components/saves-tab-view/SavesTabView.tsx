import React, { useState } from 'react';
import {
  TabView,
  TabBar,
  NavigationState,
  SceneRendererProps,
} from 'react-native-tab-view';
import { Text } from 'react-native';
import { Category, SavedEntity, TabRoute } from '../../../../types';
import SavedArtistsList from '../saved-artists-list/SavedArtistsList';
import { styles } from './styles';
import { Categories } from '../../../../res/strings/categories';

type State = NavigationState<TabRoute>;

interface OwnProps {
  componentId: string;
  savedEntity: SavedEntity;
}

const SavesTabView: React.FC<OwnProps> = ({ componentId, savedEntity }) => {
  const [categoryIndex, setCategoryIndex] = useState(Category.Makeup);

  const categoriesArr = Object.keys(Categories);

  const routes: TabRoute[] = categoriesArr.map((categoryStr) => {
    return {
      key: categoryStr,
      title: categoryStr,
    };
  });

  const onIndexChange = (newIndex: number) => {
    setCategoryIndex(newIndex);
  };

  const renderLabel = ({
    route,
    focused,
  }: {
    route: TabRoute;
    focused: boolean;
  }) => {
    return (
      <Text style={[styles.label, focused && styles.selectedLabel]}>
        {route.title}
      </Text>
    );
  };

  const renderTabBar = (
    props: SceneRendererProps & { navigationState: State },
  ) => (
    <TabBar
      {...props}
      scrollEnabled
      indicatorStyle={styles.indicator}
      style={styles.tabBar}
      tabStyle={styles.tabStyle}
      renderLabel={renderLabel}
    />
  );

  const renderScene = ({ route }: { route: TabRoute }) => {
    if (
      route.key === Categories.makeup.toLowerCase() &&
      savedEntity === SavedEntity.Artists
    ) {
      return <SavedArtistsList componentId={componentId} />;
    }
    return null;
  };

  return (
    <TabView
      navigationState={{ index: categoryIndex, routes: routes }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={onIndexChange}
    />
  );
};

export default SavesTabView;
