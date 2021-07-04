import React from 'react';
import { SafeAreaView } from 'react-native';
import CategoriesGrid from './components/categories-grid/CategoriesGrid';
import ExploreSearchBar from './components/explore-search-bar/ExploreSearchBar';
import { styles } from './styles';
import { useAskNotificationsPermission } from '../../hooks';

interface OwnProps {
  componentId: string;
}

const ExploreScreen: React.FC<OwnProps> = ({ componentId }) => {
  useAskNotificationsPermission();
  return (
    <SafeAreaView style={styles.container}>
      <ExploreSearchBar componentId={componentId} />
      <CategoriesGrid componentId={componentId} />
    </SafeAreaView>
  );
};

export default ExploreScreen;
