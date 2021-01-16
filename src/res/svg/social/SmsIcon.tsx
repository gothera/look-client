import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { SVGProps } from '../index';

export const SmsIcon = React.memo<SVGProps>((props) => {
  return (
    <Svg width={26} height={26} viewBox="0 0 26 26" fill="none" {...props}>
      <Path
        d="M13 25c6.627 0 12-5.373 12-12S19.627 1 13 1 1 6.373 1 13s5.373 12 12 12z"
        stroke="#4A81FF"
        strokeWidth={2}
      />
      <Path
        d="M13.209 7.1a6.1 6.1 0 00-4.715 9.961l-1.218 1.22a.6.6 0 00.451 1.019h5.483a6.1 6.1 0 000-12.2h-.001z"
        fill="#4A81FF"
      />
    </Svg>
  );
});
