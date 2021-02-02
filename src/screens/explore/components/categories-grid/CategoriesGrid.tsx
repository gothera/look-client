import React from 'react';
import { View, Text, FlatList, ImageSourcePropType } from 'react-native';
import CategoryCard from '../../../../components/category/category-card/CategoryCard';
import { pushExploreCategoryScreen } from '../../../../navigation';
import { CATEGORIES_GRID_COLUMNS } from '../../../../res/constants';
import strings from '../../../../res/strings/strings';
import { Category } from '../../../../types';
import RecentAppointments from '../recent-appointments/RecentAppointments';
import { styles } from './styles';

interface CategoryCardModel {
  category: Category;
  photo: ImageSourcePropType;
}

const CATEGORY_CARD: CategoryCardModel[] = [
  {
    category: Category.Makeup,
    photo: require('../../../../res/images/categories/makeup.png'),
  },
  {
    category: Category.Nails,
    photo: require('../../../../res/images/categories/nails.png'),
  },
  {
    category: Category.Hair,
    photo: require('../../../../res/images/categories/hair.png'),
  },
  {
    category: Category.Eyebrows,
    photo: require('../../../../res/images/categories/eyebrows.png'),
  },
  {
    category: Category.BodyCare,
    photo: require('../../../../res/images/categories/body-care.png'),
  },
  {
    category: Category.Lashes,
    photo: require('../../../../res/images/categories/lashes.png'),
  },
];

interface OwnProps {
  componentId: string;
}

const CategoriesGrid: React.FC<OwnProps> = ({ componentId }) => {
  const renderCategoryCard = ({
    item,
    index,
  }: {
    item: CategoryCardModel;
    index: number;
  }) => {
    const onPress = () => {
      pushExploreCategoryScreen(componentId, {
        props: { category: item.category },
      });
    };

    return (
      <View
        style={[
          styles.categoryCardContainer,
          index % CATEGORIES_GRID_COLUMNS === 0 && styles.firstColumnCategory,
          index % CATEGORIES_GRID_COLUMNS === CATEGORIES_GRID_COLUMNS - 1 &&
            styles.lastColumnCategory,
        ]}
      >
        <CategoryCard
          category={item.category}
          photo={item.photo}
          onPress={onPress}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORY_CARD}
        numColumns={CATEGORIES_GRID_COLUMNS}
        renderItem={renderCategoryCard}
        bounces={false}
        keyExtractor={(_, index) => `categories-grid-item-${index}`}
        ListHeaderComponent={
          <>
            <RecentAppointments />
            <Text style={styles.label}>
              {strings.screen.explore.categories.label}
            </Text>
          </>
        }
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

export default CategoriesGrid;
