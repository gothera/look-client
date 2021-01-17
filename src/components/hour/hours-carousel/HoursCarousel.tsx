import React from 'react';
import { View, FlatList } from 'react-native';
import ToggleHour from '../toggle-hour/ToggleHour';
import { styles } from './styles';

interface Props {
  startHours: string[];
  onSelectHour: (hour: string) => void;
  selectedHour?: string;
}

const HoursCarousel: React.FC<Props> = ({
  startHours,
  onSelectHour,
  selectedHour,
}) => {
  const renderSelectHour = ({
    item,
    index,
  }: {
    item: string;
    index: number;
  }) => {
    const onPress = () => {
      onSelectHour(item);
    };

    return (
      <View style={{ marginHorizontal: 10 }}>
        <ToggleHour
          hour={item}
          isSelected={selectedHour === item}
          onPress={onPress}
        />
      </View>
    );
  };

  return (
    <FlatList
      data={startHours}
      renderItem={renderSelectHour}
      horizontal={true}
      keyExtractor={(i: string) => `hour-${i}`}
      contentContainerStyle={styles.contentContainer}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default HoursCarousel;
