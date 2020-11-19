import React from 'react';
import { View, Text } from 'react-native';
import strings from '../../../../res/strings/strings';
import { SearchIcon } from '../../../../res/svg';
import { styles } from './styles';

interface OwnProps {
  componentId: string;
}

const ExploreSearchBar: React.FC<OwnProps> = ({ componentId }) => {
  return (
    <View style={styles.container}>
      <SearchIcon />
      <Text style={styles.placeholderText}>
        {strings.screen.explore.searchPlaceholder}
      </Text>
    </View>
  );
};

export default ExploreSearchBar;
