import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { SVGProps } from '../index';

export const HeartIcon = React.memo<SVGProps>((props) => {
  return (
    <Svg
      width={props.width || 20}
      height={17}
      viewBox="0 0 20 17"
      fill="none"
      {...props}
    >
      <Path
        d="M17.429 1.915a4.827 4.827 0 00-6.828 0l-.93.93-.93-.93a4.828 4.828 0 00-6.827 6.827l.93.93 6.828 6.83L16.5 9.674l.93-.93a4.828 4.828 0 000-6.828l-.001-.001z"
        stroke={props.stroke || '#000'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
});
