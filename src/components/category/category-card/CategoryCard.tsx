import React from 'react';
import { View, Text, Platform } from 'react-native';
import FastImage from 'react-native-fast-image';
import { typography } from '../../../theme';
import { Category } from '../../../types';
import { categoryEnumToStr, getCategoryColor } from '../../../utils/global';
import PressableCard from '../../pressable-card/PressableCard';
import { styles } from './styles';

interface OwnProps {
  category: Category;
  photo: string;
  onPress: () => void;
}

const CategoryCard: React.FC<OwnProps> = ({ category, photo, onPress }) => {
  const categoryName = categoryEnumToStr(category);
  const categoryColor = getCategoryColor(category);

  return (
    <PressableCard onPress={onPress}>
      <View style={styles.container}>
        <FastImage source={{ uri: photo }} style={styles.image} />
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            alignItems: 'center',
          }}
        >
          <View
            style={{
              position: 'absolute',
              bottom: Platform.OS === 'ios' ? -1 : 0,
              left: 0,
              right: 0,
              height: 28,
              alignItems: 'center',
              backgroundColor: categoryColor,
              opacity: 0.6,
              zIndex: 2,
              borderBottomLeftRadius: 12,
              borderBottomRightRadius: 12,
            }}
          />
          <Text
            style={{
              ...typography.subheadlineSemiBold,
              zIndex: 3,
              marginBottom: 4,
            }}
          >
            {categoryName}
          </Text>
        </View>
      </View>
    </PressableCard>
  );
};

export default CategoryCard;
