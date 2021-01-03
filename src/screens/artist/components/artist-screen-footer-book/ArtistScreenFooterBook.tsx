import React from 'react';
import PrimaryButton from '../../../../components/button/PrimaryButton';
import FooterOptions from '../../../../components/footer/footer-options/FooterOptions';
import strings from '../../../../res/strings/strings';

interface OwnProps {
  artistId: number;
}

const ArtistScreenFooterBook: React.FC<OwnProps> = ({ artistId }) => {
  return (
    <>
      <FooterOptions contentContainerStyle={{ alignItems: 'center' }}>
        <PrimaryButton onPress={() => {}} title={strings.action.book} />
      </FooterOptions>
    </>
  );
};

export default ArtistScreenFooterBook;
