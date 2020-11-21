import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import strings from '../../../../res/strings/strings';
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
  const onArtistsPress = () => {
    onSavedEntityChange(SavedEntity.Artists);
  };

  const onPostsPress = () => {
    onSavedEntityChange(SavedEntity.Posts);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onArtistsPress}>
        <Text
          style={[
            styles.text,
            currentSavedEntity === SavedEntity.Artists
              ? styles.selectedText
              : styles.unselectedText,
          ]}
        >
          {strings.screen.saves.artists}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPostsPress}>
        <Text
          style={[
            styles.text,
            currentSavedEntity === SavedEntity.Posts
              ? styles.selectedText
              : styles.unselectedText,
          ]}
        >
          {strings.screen.saves.posts}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SavesScreenHeader;
