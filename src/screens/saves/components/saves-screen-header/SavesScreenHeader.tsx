import React from 'react';
import { View, Text } from 'react-native';
import { SavedEntity } from '../../../../types/enums';
import { styles } from './styles';

interface OwnProps {
  currentSavedEntity: SavedEntity;
  onSavedEntityChange: (param: SavedEntity) => void;
}

const SavesScreenHeader: React.FC<OwnProps> = ({
  currentSavedEntity,
  onSavedEntityChange,
}) => {
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.text,
          currentSavedEntity === SavedEntity.Artists
            ? styles.selectedText
            : styles.unselectedText,
        ]}
      >
        Test
      </Text>
      <Text
        style={[
          styles.text,
          styles.postsLabel,
          currentSavedEntity === SavedEntity.Posts
            ? styles.selectedText
            : styles.unselectedText,
        ]}
      >
        Yahoo
      </Text>
    </View>
  );
};

export default SavesScreenHeader;
