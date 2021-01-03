import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { HeartIcon, HeartIconFilled } from '../../../res/svg';
import {
  saveArtist,
  unsaveArtist,
} from '../../../store/artists/artists.actions';
import { selectArtistById } from '../../../store/artists/artists.selectors';
import { AsyncDispatch } from '../../../store/store.types';
import PressableCard from '../../pressable-card/PressableCard';
import { styles } from './styles';

// TODO

interface OwnProps {
  artistId: number;
}

const ArtistSaveButton: React.FC<OwnProps> = ({ artistId }) => {
  const [isLoading, setIsLoading] = useState(false);

  const artist = useSelector(selectArtistById(artistId));

  const dispatch = useDispatch<AsyncDispatch>();

  const onFinishRequest = () => setIsLoading(false);

  const onPress = () => {
    if (isLoading) return;
    setIsLoading(true);
    artist.saved
      ? dispatch(unsaveArtist(artistId, onFinishRequest))
      : dispatch(saveArtist(artistId, onFinishRequest));
  };

  return (
    <View style={styles.container}>
      <PressableCard onPress={onPress}>
        {(artist.saved && <HeartIconFilled />) || <HeartIcon />}
      </PressableCard>
    </View>
  );
};

export default ArtistSaveButton;
