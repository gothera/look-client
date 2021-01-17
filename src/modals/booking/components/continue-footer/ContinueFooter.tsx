import React from 'react';
import PrimaryButton from '../../../../components/button/PrimaryButton';
import FooterOptions from '../../../../components/footer/footer-options/FooterOptions';
import { usePrevious } from '../../../../hooks';
import strings from '../../../../res/strings/strings';

interface Props {
  show: boolean;
  onContinue: () => void;
}

const ContinueFooter: React.FC<Props> = ({ show, onContinue }) => {
  const prevShow = usePrevious(show);

  return (
    <>
      {show && (
        <FooterOptions contentContainerStyle={{ alignItems: 'center' }}>
          <PrimaryButton onPress={onContinue} title={strings.action.continue} />
        </FooterOptions>
      )}
    </>
  );
};

export default ContinueFooter;
