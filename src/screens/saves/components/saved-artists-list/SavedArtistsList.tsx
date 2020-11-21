import React from 'react';
import { View, Text, FlatList } from 'react-native';
import LineDivider from '../../../../components/ui/LineDivider';

interface OwnProps {
  componentId: string;
}

const SavedArtistsList: React.FC<OwnProps> = ({ componentId }) => {
  const renderArtistRow = ({ item }: { item: number; index: number }) => {
    return (
      <View>
        <Text>{item}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={[0, 1, 2, 3, 4]}
      renderItem={renderArtistRow}
      ItemSeparatorComponent={LineDivider}
    />
  );
};

export default SavedArtistsList;
