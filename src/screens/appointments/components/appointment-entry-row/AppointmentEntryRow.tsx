import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import UserCategoryAvatar from '../../../../components/avatar/user-category-avatar/UserCategoryAvatar';
import LineDivider from '../../../../components/ui/LineDivider';
import { color } from '../../../../theme';
import { Category } from '../../../../types';
import { categoryEnumToStr, datePrittier } from '../../../../utils/global';
import { styles } from './styles';

interface OwnProps {
  artistPhoto: string;
  category: Category;
  artistFullName: string;
  date: string;
  serviceName: string;
  onPress?: () => void;
  showDivider?: boolean;
}

const AppointmentEntryRow: React.FC<OwnProps> = ({
  artistFullName,
  artistPhoto,
  category,
  date,
  serviceName,
  onPress,
  showDivider,
}) => {
  const categoryName = categoryEnumToStr(category);

  return (
    <TouchableHighlight onPress={onPress} underlayColor={color.highlight}>
      <>
        <View style={styles.container}>
          <UserCategoryAvatar
            photo={artistPhoto}
            size={50}
            category={category}
          />
          <View style={styles.textContainer}>
            <Text style={styles.fullName}>{artistFullName}</Text>
            <Text
              style={styles.description}
            >{`${categoryName}, ${serviceName}`}</Text>
            <Text style={styles.date}>{datePrittier(date)}</Text>
          </View>
        </View>
        {showDivider && <LineDivider style={styles.divider} />}
      </>
    </TouchableHighlight>
  );
};

export default AppointmentEntryRow;
