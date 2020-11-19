import React from 'react';
import { View } from 'react-native';
import ExploreSearchBar from './components/explore-search-bar/ExploreSearchBar';
import { styles } from './styles';

interface OwnProps {
  componentId: string;
}

const ExploreScreen: React.FC<OwnProps> = ({ componentId }) => {
  return (
    <View style={styles.container}>
      <ExploreSearchBar componentId={componentId} />
    </View>
  );
};

export default ExploreScreen;
