import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  TabView,
  TabBar,
  SceneMap,
  NavigationState,
  SceneRendererProps,
} from 'react-native-tab-view';
import SavedArtistsList from '../saved-artists-list/SavedArtistsList';

type State = NavigationState<{
  key: string;
  title: string;
}>;

interface OwnProps {
  componentId: string;
}

const SavesTabView: React.FC<OwnProps> = ({ componentId }) => {
  const [categoryIndex, setCategoryIndex] = useState(0);

  const routes = [
    { key: 'article', title: 'Article' },
    { key: 'contacts', title: 'Contacts' },
    { key: 'albums', title: 'Albums' },
    { key: 'chat', title: 'Chat' },
    { key: 'long', title: 'long long long title' },
    { key: 'medium', title: 'medium title' },
  ];

  const onIndexChange = (newIndex: number) => {
    setCategoryIndex(newIndex);
  };

  const renderTabBar = (
    props: SceneRendererProps & { navigationState: State },
  ) => (
    <TabBar
      {...props}
      scrollEnabled
      indicatorStyle={styles.indicator}
      style={styles.tabbar}
      labelStyle={styles.label}
      tabStyle={styles.tabStyle}
    />
  );

  const renderScene = SceneMap({
    albums: SavedArtistsList,
    contacts: SavedArtistsList,
    article: SavedArtistsList,
    chat: SavedArtistsList,
    long: SavedArtistsList,
    medium: SavedArtistsList,
  });

  return (
    <TabView
      navigationState={{ index: categoryIndex, routes: routes }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={onIndexChange}
    />
  );
};

const styles = StyleSheet.create({
  tabbar: {
    // backgroundColor: '#3f51b5',
  },
  indicator: {
    backgroundColor: '#ffeb3b',
  },
  label: {
    fontWeight: '400',
  },
  tabStyle: {
    width: 'auto',
  },
});

export default SavesTabView;
