import React, { useState } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { Navigation } from 'react-native-navigation';
import RecentSearchesList from './components/recent-searches-list/RecentSearchesList';
import SearchBarInput from './components/search-bar-input/SearchBarInput';
import { styles } from './styles';

interface OwnProps {
  componentId: string;
}

const SearchModal: React.FC<OwnProps> = ({ componentId }) => {
  const [searchInput, setSearchInput] = useState('');

  const isInputEmpty = searchInput === '';

  const closeModal = () => {
    Navigation.dismissModal(componentId);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchBarInput
        onCancel={closeModal}
        value={searchInput}
        setValue={setSearchInput}
      />
      {isInputEmpty ? (
        <RecentSearchesList componentId={componentId} />
      ) : (
        <Text>search results...</Text>
      )}
    </SafeAreaView>
  );
};

export default SearchModal;
