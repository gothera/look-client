import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import CategoriesGrid from './components/categories-grid/CategoriesGrid';
import ExploreSearchBar from './components/explore-search-bar/ExploreSearchBar';
import { styles } from './styles';

interface OwnProps {
  componentId: string;
}

const ExploreScreen: React.FC<OwnProps> = ({ componentId }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ExploreSearchBar componentId={componentId} />
      <CategoriesGrid componentId={componentId} />
    </SafeAreaView>
  );
};

export default ExploreScreen;
