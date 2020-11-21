import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { SavedEntity } from '../../types/enums';
import SavesScreenHeader from './components/saves-screen-header/SavesScreenHeader';
import SavesTabView from './components/saves-tab-view/SavesTabView';
import { styles } from './styles';

interface OwnProps {
  componentId: string;
}

const SavesScreen: React.FC<OwnProps> = ({ componentId }) => {
  const [savedEntity, setSavedEntity] = useState(SavedEntity.Artists);

  const onChangeSavedEntity = (newSavedEntity: SavedEntity) => {
    if (newSavedEntity === savedEntity) {
      return;
    }
    setSavedEntity(newSavedEntity);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SavesScreenHeader
        currentSavedEntity={savedEntity}
        onSavedEntityChange={onChangeSavedEntity}
      />
      <SavesTabView componentId={componentId} savedEntity={savedEntity} />
    </SafeAreaView>
  );
};

export default SavesScreen;
