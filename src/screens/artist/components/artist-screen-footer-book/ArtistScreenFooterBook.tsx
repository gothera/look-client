import React from 'react';
import PrimaryButton from '../../../../components/button/PrimaryButton';
import FooterOptions from '../../../../components/footer/footer-options/FooterOptions';
import { showBookingModal } from '../../../../navigation';
import strings from '../../../../res/strings/strings';

interface OwnProps {
  artistId: number;
}

const ArtistScreenFooterBook: React.FC<OwnProps> = ({ artistId }) => {
  const goToBooking = () => {
    showBookingModal({ props: { artistId } });
  };

  return (
    <>
      <FooterOptions contentContainerStyle={{ alignItems: 'center' }}>
        <PrimaryButton onPress={goToBooking} title={strings.action.book} />
      </FooterOptions>
    </>
  );
};

export default ArtistScreenFooterBook;
