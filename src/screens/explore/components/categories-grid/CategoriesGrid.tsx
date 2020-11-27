import React from 'react';
import { View, Text, FlatList } from 'react-native';
import CategoryCard from '../../../../components/category/category-card/CategoryCard';
import { CATEGORIES_GRID_COLUMNS } from '../../../../res/constants';
import strings from '../../../../res/strings/strings';
import { Category } from '../../../../types';
import { styles } from './styles';

interface CategoryCardModel {
  category: Category;
  photo: string;
}

const CATEGORY_CARD: CategoryCardModel[] = [
  {
    category: Category.Makeup,
    photo:
      'https://media.allure.com/photos/5e4c50ec4001910008cfe535/master/pass/makeup-trends-lede.jpg',
  },
  {
    category: Category.Nails,
    photo:
      'https://static01.nyt.com/images/2020/08/04/fashion/04PRESSONNAILS3/merlin_175247889_e509bacb-806f-4895-b166-3e77f82a0e0d-superJumbo.jpg',
  },
  {
    category: Category.Hair,
    photo:
      'https://img.freepik.com/free-photo/woman-hairdresser-making-hairstyle-beauty-salon_1122-6538.jpg?size=626&ext=jpg&ga=GA1.2.1179755202.1603152000',
  },
  {
    category: Category.Eyebrows,
    photo:
      'https://www.newbeauty.com/wp-content/uploads/2020/02/7781-eyebrows-1png.png',
  },
  {
    category: Category.BodyCare,
    photo:
      'https://image.freepik.com/free-photo/young-woman-getting-back-massage-spa-salon_1098-18128.jpg',
  },
  {
    category: Category.Lashes,
    photo: 'https://www.nicenailandspa.com/nail/images/eyelash.jpg',
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
    return (
      <View
        style={[
          styles.categoryCardContainer,
          index % CATEGORIES_GRID_COLUMNS === 0 && styles.firstColumnCategory,
          index % CATEGORIES_GRID_COLUMNS === CATEGORIES_GRID_COLUMNS - 1 &&
            styles.lastColumnCategory,
        ]}
      >
        <CategoryCard category={item.category} photo={item.photo} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {strings.screen.explore.categories.label}
      </Text>
      <FlatList
        data={CATEGORY_CARD}
        numColumns={CATEGORIES_GRID_COLUMNS}
        renderItem={renderCategoryCard}
        bounces={false}
      />
    </View>
  );
};

export default CategoriesGrid;
