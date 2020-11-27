import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { SVGProps } from '../index';

export const CloseIcon = React.memo<SVGProps>((props) => {
  return (
    <Svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <Path
        d="M8.938 8.005l6.858-6.859a.666.666 0 10-.942-.942L7.996 7.062 1.137.204a.666.666 0 00-.942.942l6.858 6.859-6.858 6.858a.666.666 0 00.942.942l6.859-6.858 6.858 6.858a.666.666 0 00.942-.942L8.938 8.005z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
});
