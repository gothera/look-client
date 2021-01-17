import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { ChevronLeftIcon, CloseIcon } from '../../../../res/svg';
import { color } from '../../../../theme';
import { styles } from './styles';

interface Props {
  onClose: () => void;
  onBack: () => void;
  showBack: boolean;
}

const BookingHeaderTopbar: React.FC<Props> = ({
  onBack,
  onClose,
  showBack,
}) => {
  return (
    <View style={styles.container}>
      <View>
        {showBack && (
          <TouchableOpacity
            onPress={onBack}
            hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
          >
            <ChevronLeftIcon fill={color.textInverted} />
          </TouchableOpacity>
        )}
      </View>
      <TouchableOpacity
        onPress={onClose}
        hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
      >
        <CloseIcon fill={color.textInverted} />
      </TouchableOpacity>
    </View>
  );
};

export default BookingHeaderTopbar;
