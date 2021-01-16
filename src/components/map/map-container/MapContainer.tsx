import React from 'react';
import {
  View,
  StyleProp,
  ViewStyle,
  Platform,
  Linking,
  TouchableWithoutFeedback,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import { SCREEN_WIDTH } from '../../../res/constants';
import { styles } from './styles';

interface Props {
  latitude: string;
  longitude: string;
  style?: StyleProp<ViewStyle>;
}

const MapContainer: React.FC<Props> = ({ latitude, longitude, style }) => {
  const latLng = `${latitude},${longitude}`;

  const mapImageUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${latLng}&zoom=14&size=${
    SCREEN_WIDTH - 32
  }x200&markers=color:red%7Clabel:S%7C${latLng}&key=AIzaSyAQou74g-tBWgBjPNh8ITK1HNJyiwh4pAM`;

  const goToGoogleMaps = () => {
    const scheme = Platform.select({
      ios: 'maps:0,0?q=',
      android: 'geo:0,0?q=',
    });
    const label = 'Address';
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    });

    if (url) {
      Linking.openURL(url).catch((err) => {
        console.error('open google maps error', err);
      });
    }
  };

  return (
    <TouchableWithoutFeedback onPress={goToGoogleMaps}>
      <View style={[styles.container, style]}>
        <FastImage
          style={styles.mapImage}
          source={{
            uri: mapImageUrl,
          }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MapContainer;
