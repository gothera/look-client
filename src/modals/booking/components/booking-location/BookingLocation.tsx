import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import ToggleLocation from '../../../../components/map/toggle-location/ToggleLocation';
import { selectArtistById } from '../../../../store/artists/artists.selectors';
import { selectCurrentClient } from '../../../../store/profile/profile.selectors';
import { LocationType } from '../../../../types';
import ContinueFooter from '../continue-footer/ContinueFooter';
import { styles } from './styles';

interface Props {
  artistId: number;
  onSelectLocationContinue: (location: string) => void;
}

const BookingLocation: React.FC<Props> = ({
  artistId,
  onSelectLocationContinue,
}) => {
  const artist = useSelector(selectArtistById(artistId));
  const client = useSelector(selectCurrentClient);
  console.log("Artistt :", artist);
  console.log("Client :", client);

  const [selectedLocation, setSelectedLocation] = useState<LocationType>();

  const selectArtistLocation = () => {
    setSelectedLocation(artist.address);
  };

  // const selectClientLocation = () => {
  //   setSelectedLocation(LocationType.Client);
  // };

  const onContinue = () => {
    if (selectedLocation === undefined) {
      return;
    }
    onSelectLocationContinue(selectedLocation);
  };

  return (
    <>
      <ScrollView contentContainerStyle={styles.contentContainer}>

        <ToggleLocation
          name={'Artist Location'}
          onSelect={selectArtistLocation}
          isSelected={selectedLocation === LocationType.Artist}
          latitude={artist.latitude}
          longitude={artist.longitude}   
          address={artist.address}
        />


        {/* <ToggleLocation
          name={'Your Location'}
          onSelect={selectClientLocation}
          isSelected={selectedLocation === LocationType.Client}
          latitude={client.latitude}
          longitude={client.longitude}
        /> */}

      </ScrollView>
      <ContinueFooter
        show={selectedLocation !== undefined}
        onContinue={onContinue}
      />
    </>
  );
};

export default BookingLocation;
