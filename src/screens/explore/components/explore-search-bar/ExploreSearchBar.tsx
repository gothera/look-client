import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { showSearchModal } from '../../../../navigation';
import strings from '../../../../res/strings/strings';
import { SearchIcon } from '../../../../res/svg';
import { styles } from './styles';

interface OwnProps {
  componentId: string;
}

const ExploreSearchBar: React.FC<OwnProps> = ({ componentId }) => {
  const onSearchPress = () => {
    showSearchModal();
  };

  return (
    <TouchableWithoutFeedback onPress={onSearchPress}>
      <View style={styles.container}>
        <SearchIcon />
        <Text style={styles.placeholderText}>
          {strings.screen.explore.searchPlaceholder}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ExploreSearchBar;
