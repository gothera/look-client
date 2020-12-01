import React from 'react';
import { View, Text } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { color } from '../../theme';
import { Category } from '../../types';
import { categoryEnumToStr } from '../../utils/global';
import ExploreArtistsList from './components/explore-artists-list/ExploreArtistsList';
import { styles } from './styles';

interface OwnProps {
  componentId: string;
  category: Category;
}

const ExploreCategoryScreen: React.FC<OwnProps> = ({
  componentId,
  category,
}) => {
  const categoryName = categoryEnumToStr(category);
  Navigation.mergeOptions(componentId, {
    topBar: {
      visible: true,
      title: {
        text: categoryName,
        fontFamily: 'Gilroy-SemiBold',
      },
      backButton: {
        showTitle: false,
        icon: require('../../res/images/icons/chevron-left-icon.png'),
        color: color.textPrimary,
      },
    },
  });

  return (
    <View style={styles.container}>
      <ExploreArtistsList category={category} componentId={componentId} />
    </View>
  );
};

export default ExploreCategoryScreen;
