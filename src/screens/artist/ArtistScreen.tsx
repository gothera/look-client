import React from 'react';
import { View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { useSelector } from 'react-redux';
import { selectArtistById } from '../../store/artists/artists.selectors';
import { color } from '../../theme';
import ArtistScreenContainer from './components/artist-screen-container/ArtistScreenContainer';
import ArtistScreenFooterBook from './components/artist-screen-footer-book/ArtistScreenFooterBook';
import { styles } from './styles';

interface OwnProps {
  componentId: string;
  artistId: number;
}

const ArtistScreen: React.FC<OwnProps> = ({ componentId, artistId }) => {
  Navigation.mergeOptions(componentId, {
    bottomTabs: {
      // animate: true,
      visible: false,
    },
    topBar: {
      visible: true,
      backButton: {
        showTitle: false,
        icon: require('../../res/images/icons/chevron-left-icon.png'),
        color: color.textPrimary,
      },
      background: {
        color: color.background,
      },
    },
  });

  const artist = useSelector(selectArtistById(artistId));

  const { offeredServices } = artist;

  return (
    <View style={styles.container}>
      <ArtistScreenContainer artistId={artistId} componentId={componentId} />
      {offeredServices.length > 0 && (
        <ArtistScreenFooterBook artistId={artistId} />
      )}
    </View>
  );
};

export default ArtistScreen;
